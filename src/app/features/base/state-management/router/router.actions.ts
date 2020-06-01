/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractActions} from '../../../../core/state-management/abstract-actions';
import {RouterPayload} from './router.payload';
import {Router} from './router.state';

@Injectable()
export class RouterActions extends AbstractActions<RouterPayload> {
  NavigateAction = this.action<RouterPayload>(`${this.getEntity()} Navigate`);

  getEntity(): string {
    return '[ROUTER]';
  }

  constructor(
    store: Store<Router>
  ) {
    super(store);
  }
}
