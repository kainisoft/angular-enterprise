/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {AbstractPayload} from '../../../../core/state-management/abstract-payload';

export interface SnackBarPayload extends AbstractPayload {
  message: string;
  action?: string;
}
