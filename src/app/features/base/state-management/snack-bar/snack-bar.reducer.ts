/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {AbstractAction} from '../../../../core/state-management/abstract-actions';
import {AbstractReducer} from '../../../../core/state-management/abstract-reducer';
import {SnackBarActions} from './snack-bar.actions';
import {SnackBarPayload} from './snack-bar.payload';
import {SnackBar, SnackBarState} from './snack-bar.state';

@Injectable()
export class SnackBarReducer extends AbstractReducer<SnackBar, SnackBarState, SnackBarPayload> {
  get storeName(): string {
    return 'snack-bar';
  }

  get reducers(): {[p: string]: (action: AbstractAction<SnackBarPayload>, state: SnackBarState) => SnackBarState} {
    return {

    };
  }

  constructor(
    protected actions: SnackBarActions
  ) {
    super(actions);
  }
}
