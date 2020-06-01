/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {AbstractEffects} from '../../../../core/state-management/abstract-effects';
import {NavBarActions} from './nav-bar.actions';

@Injectable()
export class NavBarEffects extends AbstractEffects {
  constructor(
    protected actions: Actions,
    protected navBarActions: NavBarActions,
  ) {
    super(actions, navBarActions);
  }
}
