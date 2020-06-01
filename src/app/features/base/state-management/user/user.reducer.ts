/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '../../../../core/decorators/select.decorator';
import {AbstractAction} from '../../../../core/state-management/abstract-actions';
import {AbstractReducer} from '../../../../core/state-management/abstract-reducer';
import {UserActions} from './user.actions';
import {UserPayload} from './user.payload';
import {User, UserState} from './user.state';

@Injectable()
export class UserReducer extends AbstractReducer<User, UserState, UserPayload> {
  @Select()
  selectUser: () => Observable<User>;

  get storeName(): string {
    return 'user';
  }

  get reducers(): {[p: string]: (action: AbstractAction<any>, state: UserState) => UserState} {
    return {
      [this.actions.SetUserAction.TYPE]: (action, state) => ({...state, ...{user: action.payload}}),
    };
  }

  constructor(
    protected actions: UserActions
  ) {
    super(actions);
  }
}
