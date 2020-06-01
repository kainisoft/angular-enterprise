/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {finalize, first} from 'rxjs/operators';
import {AbstractService} from '../../../core/services/abstract.service';
import {ChannelList} from '../state-management/sse/sse.state';

@Injectable({
  providedIn: 'root'
})
export class SseService extends AbstractService {
  protected readonly INTERVAL = 5000;

  protected timer: number;
  protected channelList: ChannelList;
  protected params;

  constructor(
    http: HttpClient,
    protected zone: NgZone,
  ) {
    super(http);
  }

  get uri(): string {
    return 'sse';
  }

  protected createSource() {
    this.destroySource();

    if (this.channelList.length) {
      this.timer = this.zone.runOutsideAngular(() => window.setTimeout(() => this.run(), this.INTERVAL));
    }
  }

  protected destroySource() {
    this.timer && window.clearTimeout(this.timer);
    this.timer = null;
  }

  protected run() {
    this.get('?' + new URLSearchParams(this.params)).pipe(
      first(),
      finalize(() => this.createSource())
    ).subscribe((data) => {
      Object.keys(data).forEach(key => {
        const channel = this.channelList.find(c => c.eventName === key);

        channel && this.zone.run(() => channel.listener(data[key]));
      });
    });
  }

  registerListener(channels: ChannelList) {
    this.channelList = channels;
    this.destroySource();

    if (!channels.length) {
      return;
    }

    this.params = channels.reduce((carry, channel) => {
      if (channel.params) {
        Object.keys(channel.params).forEach(key => {
          carry[`${channel.eventName}[${key}]`] = channel.params[key];
        });
      } else {
        carry[`${channel.eventName}`] = true;
      }

      return carry;
    }, {});

    this.zone.runOutsideAngular(() => this.run());
  }
}
