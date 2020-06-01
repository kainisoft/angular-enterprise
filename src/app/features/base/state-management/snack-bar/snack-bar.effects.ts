/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {AbstractEffects} from '../../../../core/state-management/abstract-effects';
import {SnackBarService} from '../../../../core/services/snack-bar.service';
import {SnackBarActions} from './snack-bar.actions';
import {SnackBarPayload} from './snack-bar.payload';

@Injectable()
export class SnackBarEffects extends AbstractEffects {
  @Effect()
  showError$ = this.actions.pipe(
    ofType<any>(this.snackBarActions.ShowErrorAction.TYPE),
    map(action => this.parseAction<SnackBarPayload>(action)),
    switchMap(({payload, completeActions}) => {
      this.snackBarService.open(payload.message);

      return completeActions;
    })
  );

  @Effect()
  showSuccess$ = this.actions.pipe(
    ofType<any>(this.snackBarActions.ShowSuccessAction.TYPE),
    map(action => this.parseAction<SnackBarPayload>(action)),
    switchMap(({payload, completeActions}) => {
      this.snackBarService.open(payload.message);

      return completeActions;
    })
  );

  constructor(
    protected actions: Actions,
    protected snackBarActions: SnackBarActions,
    protected snackBarService: SnackBarService,
  ) {
    super(actions, snackBarActions);
  }
}
