/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {EntityState} from '@ngrx/entity';
import {AbstractState} from '../../../../core/state-management/abstract-state';

export interface NavBar extends AbstractState {
  isOpen: boolean;
}

export interface NavBarState extends EntityState<NavBar> {
  isOpen: boolean;
}
