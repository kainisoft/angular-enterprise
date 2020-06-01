/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractActions} from '../../../../core/state-management/abstract-actions';
import {SnackBarPayload} from './snack-bar.payload';
import {SnackBar} from './snack-bar.state';

@Injectable()
export class SnackBarActions extends AbstractActions<SnackBarPayload> {
  ShowErrorAction = this.action<SnackBarPayload>(`${this.getEntity()} Show error`);

  ShowSuccessAction = this.action<SnackBarPayload>(`${this.getEntity()} Show success`);

  getEntity(): string {
    return '[SNACKBAR]';
  }

  constructor(
    store: Store<SnackBar>
  ) {
    super(store);
  }
}
