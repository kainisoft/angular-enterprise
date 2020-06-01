/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {AbstractPayload} from '../../../../core/state-management/abstract-payload';

export interface UserPayload extends AbstractPayload {

}

export interface LoadUserDataPayload extends UserPayload {
  id: number;
}
