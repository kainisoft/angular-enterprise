/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {from, of} from 'rxjs';
import {concatMap, map, switchMap} from 'rxjs/operators';
import {AbstractEffects} from '../../../../core/state-management/abstract-effects';
import {RouterActions} from './router.actions';
import {RouterPayload} from './router.payload';

@Injectable()
export class RouterEffects extends AbstractEffects {
  @Effect()
  navigate$ = this.actions.pipe(
    ofType<any>(this.routerActions.NavigateAction.TYPE),
    map(action => this.parseAction<RouterPayload>(action)),
    switchMap(({payload, completeActions}) => {
      return from(this.router.navigate(payload.commands, payload.extras)).pipe(
        concatMap(() => {
          return [
            ...completeActions
          ];
        })
      );
    })
  );

  constructor(
    protected actions: Actions,
    protected routerActions: RouterActions,
    protected router: Router,
  ) {
    super(actions, routerActions);
  }
}
