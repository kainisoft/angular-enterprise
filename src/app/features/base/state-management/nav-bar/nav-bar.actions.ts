/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractActions} from '../../../../core/state-management/abstract-actions';
import {NavBarTogglePayload} from './nav-bar.payload';
import {NavBar} from './nav-bar.state';

@Injectable()
export class NavBarActions extends AbstractActions<NavBarTogglePayload> {
  ToggleAction = this.action<NavBarTogglePayload>(`${this.getEntity()} Toggle`);

  CloseAction = this.action(`${this.getEntity()} Close`);

  getEntity(): string {
    return '[NAV-BAR]';
  }

  constructor(
    store: Store<NavBar>
  ) {
    super(
      store
    );
  }
}
