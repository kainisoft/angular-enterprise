/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {concatMap, debounceTime, first, map} from 'rxjs/operators';
import {AbstractEffects} from '../../../../core/state-management/abstract-effects';
import {SseService} from '../../services/sse.service';
import {SseActions} from './sse.actions';
import {RegisterListenerPayload} from './sse.payload';
import {SseReducer} from './sse.reducer';

@Injectable()
export class SseEffects extends AbstractEffects {
  @Effect()
  registerListener$ = this.actions.pipe(
    ofType<any>(this.sseActions.RegisterListener.TYPE),
    map(action => this.parseAction<RegisterListenerPayload>(action)),
    concatMap(({completeActions}) => {
      return [
        new this.sseActions.RestartListener(),
        ...completeActions
      ];
    })
  );

  @Effect()
  unRegisterListener$ = this.actions.pipe(
    ofType<any>(this.sseActions.UnRegisterListener.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => {
      return [
        new this.sseActions.RestartListener(),
        ...completeActions
      ];
    })
  );

  @Effect()
  reStartListener$ = this.actions.pipe(
    ofType<any>(this.sseActions.RestartListener.TYPE),
    debounceTime(200),
    map(action => this.parseAction<RegisterListenerPayload>(action)),
    concatMap(({completeActions}) => {
      return this.sseReducer.selectAll().pipe(
        first(),
        concatMap((channels) => {
          this.sseService.registerListener(channels);

          return [
            ...completeActions
          ];
        })
      );
    })
  );

  constructor(
    protected actions: Actions,
    protected sseActions: SseActions,
    protected sseService: SseService,
    protected sseReducer: SseReducer,
  ) {
    super(actions, sseActions);
  }
}
