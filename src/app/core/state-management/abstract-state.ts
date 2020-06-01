/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {EntityState} from '@ngrx/entity';

export interface AbstractState {
  id: number;
}

export interface AbstractEntityState<T> extends EntityState<T>{
  isLoading?: boolean;
}
