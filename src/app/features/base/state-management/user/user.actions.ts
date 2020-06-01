/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractActions} from '../../../../core/state-management/abstract-actions';
import {LoadUserDataPayload, UserPayload} from './user.payload';
import {User} from './user.state';

@Injectable()
export class UserActions extends AbstractActions<UserPayload> {
  SetUserAction = this.action<UserPayload>(`${this.getEntity()} Set user`);

  AfterUserSetAction = this.action(`${this.getEntity()} After user set`);

  LoginUserAction = this.action<UserPayload>(`${this.getEntity()} Login user`);

  LogoutUserAction = this.action(`${this.getEntity()} Logout user`);

  LoadUserDataAction = this.action<LoadUserDataPayload>(`${this.getEntity()} Load user data`);

  UserDataLoadedAction = this.action(`${this.getEntity()} User data loaded`);

  getEntity(): string {
    return '[USER]';
  }

  constructor(
    store: Store<User>
  ) {
    super(store);
  }
}
