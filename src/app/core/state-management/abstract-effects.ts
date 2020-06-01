/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map} from 'rxjs/operators';
import {AbstractAction, AbstractActions} from './abstract-actions';
import {AbstractPayload} from './abstract-payload';

export abstract class AbstractEffects {
  startLoading$ = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.StartLoadingAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  endLoading$ = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.EndLoadingAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  addMany$ = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.AddManyAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  upsertMany$ = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.UpsertManyAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  replaceAll = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.ReplaceAllAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  removeAll = createEffect(() => this.actions.pipe(
    ofType<any>(this.abstractActions.RemoveAllAction.TYPE),
    map(action => this.parseAction(action)),
    concatMap(({completeActions}) => completeActions)
  ));

  protected constructor(
    protected actions: Actions,
    protected abstractActions: AbstractActions<any>
  ) {

  }

  protected parseAction<P extends AbstractPayload>(action: AbstractAction<P>) {
    const {type, payload, completeActions} = action;

    return {
      type, payload, completeActions
    };
  }
}
