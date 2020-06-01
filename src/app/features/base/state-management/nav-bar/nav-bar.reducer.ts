/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '../../../../core/decorators/select.decorator';
import {AbstractAction} from '../../../../core/state-management/abstract-actions';
import {AbstractReducer} from '../../../../core/state-management/abstract-reducer';
import {NavBarActions} from './nav-bar.actions';
import {NavBarTogglePayload} from './nav-bar.payload';
import {NavBar, NavBarState} from './nav-bar.state';

@Injectable()
export class NavBarReducer extends AbstractReducer<NavBar, NavBarState, NavBarTogglePayload> {
  @Select()
  selectIsOpen: () => Observable<boolean>;

  get storeName(): string {
    return 'nav-bar';
  }

  constructor(
    protected actions: NavBarActions
  ) {
    super(actions);
  }

  get reducers(): {[p: string]: (action: AbstractAction<NavBarTogglePayload>, state: NavBarState) => NavBarState} {
    return {
      [this.actions.ToggleAction.TYPE]: (action, state) => ({...state, ...{isOpen: !state.isOpen}}),
      [this.actions.CloseAction.TYPE]: (action, state) => ({...state, ...{isOpen: false}}),
    };
  }
}
