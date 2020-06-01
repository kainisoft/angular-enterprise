/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractActions} from '../../../../core/state-management/abstract-actions';
import {RegisterListenerPayload, SsePayload, UnRegisterListenerPayload} from './sse.payload';
import {SseChannel} from './sse.state';

@Injectable()
export class SseActions extends AbstractActions<SsePayload> {
  RegisterListener = this.action<RegisterListenerPayload>(`${this.getEntity()} Register sse listener`);

  UnRegisterListener = this.action<UnRegisterListenerPayload>(`${this.getEntity()} Un-register sse listener`);

  RestartListener = this.action(`${this.getEntity()} Restart sse listener`);

  getEntity(): string {
    return '[SSE]';
  }

  constructor(
    store: Store<SseChannel>
  ) {
    super(store);
  }
}
