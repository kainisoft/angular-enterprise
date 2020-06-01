/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {EntityState} from '@ngrx/entity';
import {AbstractState} from '../../../../core/state-management/abstract-state';

export interface Router extends AbstractState {

}

export interface RouterState extends EntityState<Router> {

}
