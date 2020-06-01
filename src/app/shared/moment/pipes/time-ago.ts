import {Pipe, ChangeDetectorRef, PipeTransform, OnDestroy, NgZone} from '@angular/core';
import * as moment from 'moment';

const momentConstructor = moment;

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer: number | null;

  private lastTime: number;
  private lastValue: moment.MomentInput;
  private lastOmitSuffix: boolean;
  private lastLocale?: string;
  private lastText: string;
  private formatFn: (m: moment.Moment) => string;

  constructor(
    protected cdRef: ChangeDetectorRef,
    protected ngZone: NgZone
  ) {
  }

  format(m: moment.Moment) {
    if (m.diff(momentConstructor(), 'days') < -2) {
      return m.format('LL [<br>] HH:mm');
    }

    return m.from(momentConstructor(), this.lastOmitSuffix);
  }

  transform(value: moment.MomentInput, omitSuffix?: boolean, formatFn?: (m: moment.Moment) => string): string {
    if (this.hasChanged(value, omitSuffix)) {
      this.lastTime = this.getTime(value);
      this.lastValue = value;
      this.lastOmitSuffix = omitSuffix;
      this.lastLocale = this.getLocale(value);
      this.formatFn = formatFn || this.format.bind(this);
      this.removeTimer();
      this.createTimer();
      this.lastText = this.formatFn(momentConstructor(value));
    } else {
      this.createTimer();
    }

    return this.lastText;
  }

  protected createTimer() {
    if (this.timer) {
      return;
    }

    const momentInstance = momentConstructor(this.lastValue);
    const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;

    this.timer = this.ngZone.runOutsideAngular(() => {
      return window.setTimeout(() => {
        this.lastText = this.formatFn(momentConstructor(this.lastValue));

        this.timer = null;
        this.ngZone.run(() => this.cdRef.markForCheck());
      }, timeToUpdate);
    });
  }

  protected removeTimer() {
    this.timer && window.clearTimeout(this.timer);
    this.timer = null;
  }

  protected getSecondsUntilUpdate(momentInstance: moment.Moment) {
    const howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));

    if (howOld < 1) {
      return 15;
    } else if (howOld < 60) {
      return 30;
    } else if (howOld < 180) {
      return 300;
    } else {
      return 3600;
    }
  }

  protected hasChanged(value: moment.MomentInput, omitSuffix?: boolean): boolean {
    return this.getTime(value) !== this.lastTime
      || this.getLocale(value) !== this.lastLocale
      || omitSuffix !== this.lastOmitSuffix;
  }

  protected getTime(value: moment.MomentInput): number {
    if (moment.isDate(value)) {
      return value.getTime();
    } else if (moment.isMoment(value)) {
      return value.valueOf();
    } else {
      return momentConstructor(value).valueOf();
    }
  }

  protected getLocale(value: moment.MomentInput): string | null {
    return moment.isMoment(value) ? value.locale() : moment.locale();
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }
}
