/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {AbstractAction} from '../../../../core/state-management/abstract-actions';
import {AbstractReducer} from '../../../../core/state-management/abstract-reducer';
import {RouterActions} from './router.actions';
import {RouterPayload} from './router.payload';
import {Router, RouterState} from './router.state';

@Injectable()
export class RouterReducer extends AbstractReducer<Router, RouterState, RouterPayload> {
  get storeName(): string {
    return 'router';
  }

  get reducers(): {[p: string]: (action: AbstractAction<RouterPayload>, state: RouterState) => RouterState} {
    return {

    };
  }

  constructor(
    protected actions: RouterActions
  ) {
    super(actions);
  }
}
