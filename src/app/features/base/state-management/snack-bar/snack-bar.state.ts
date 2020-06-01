/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {EntityState} from '@ngrx/entity';
import {AbstractState} from '../../../../core/state-management/abstract-state';

export interface SnackBar extends AbstractState {

}

export interface SnackBarState extends EntityState<SnackBar> {

}
