/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {concatMap, finalize, map} from 'rxjs/operators';
import {AbstractEffects} from '../../../../core/state-management/abstract-effects';
import {UserService} from '../../services/user.service';
import {UserActions} from './user.actions';
import {LoadUserDataPayload, UserPayload} from './user.payload';

@Injectable()
export class UserEffects extends AbstractEffects {
  @Effect()
  loginUser$ = this.actions.pipe(
    ofType<any>(this.userActions.LoginUserAction.TYPE),
    map(action => this.parseAction<UserPayload>(action)),
    concatMap(({payload, completeActions}) => {
      return [
        new this.userActions.SetUserAction(payload),
        ...completeActions
      ];
    })
  );

  @Effect()
  logoutUser$ = this.actions.pipe(
    ofType<any>(this.userActions.LogoutUserAction.TYPE),
    map(action => this.parseAction<UserPayload>(action)),
    concatMap(({completeActions}) => {
      return [
        new this.userActions.SetUserAction(null),
        ...completeActions
      ];
    })
  );

  @Effect()
  afterUserSet$ = this.actions.pipe(
    ofType<any>(this.userActions.SetUserAction.TYPE),
    map(action => this.parseAction<UserPayload>(action)),
    concatMap(({payload, completeActions}) => {
      const {token = null} = (payload || {}) as any;

      localStorage.setItem('console_auth', token);

      return [
        new this.userActions.AfterUserSetAction(),
        ...completeActions
      ];
    })
  );

  @Effect()
  loadUserData$ = this.actions.pipe(
    ofType<any>(this.userActions.LoadUserDataAction.TYPE),
    map(action => this.parseAction<LoadUserDataPayload>(action)),
    concatMap(({payload, completeActions}) => {
      return this.userService.loadData(payload.id).pipe(
        concatMap(data => {
          return [
            new this.userActions.UpsertOneAction(data),
            ...completeActions
          ];
        }),
        finalize(() => new this.userActions.UserDataLoadedAction().dispatch())
      );
    })
  );

  constructor(
    protected actions: Actions,
    protected userActions: UserActions,
    protected userService: UserService,
  ) {
    super(actions, userActions);
  }
}
