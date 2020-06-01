/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {AbstractAction} from '../../../../core/state-management/abstract-actions';
import {AbstractReducer} from '../../../../core/state-management/abstract-reducer';
import {SseActions} from './sse.actions';
import {RegisterListenerPayload, SsePayload, UnRegisterListenerPayload} from './sse.payload';
import {SseChannel, SseState} from './sse.state';

@Injectable()
export class SseReducer extends AbstractReducer<SseChannel, SseState, SsePayload> {
  get storeName(): string {
    return 'sse';
  }

  get reducers(): { [p: string]: (action: AbstractAction<SsePayload>, state: SseState) => SseState } {
    return {
      [this.actions.RegisterListener.TYPE]: (action: AbstractAction<RegisterListenerPayload>, state) => {
        return this.adapter.upsertOne(action.payload as any, state);
      },
      [this.actions.UnRegisterListener.TYPE]: (action: AbstractAction<UnRegisterListenerPayload>, state) => {
        return this.adapter.removeOne(action.payload.eventName, state);
      }
    };
  }

  protected adapter: EntityAdapter<SseChannel> = createEntityAdapter({
    selectId: (channel => channel.eventName),
    sortComparer: false,
  });

  constructor(
    protected actions: SseActions
  ) {
    super(actions);
  }

}
