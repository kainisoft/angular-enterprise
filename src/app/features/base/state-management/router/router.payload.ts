/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {NavigationExtras} from '@angular/router';
import {AbstractPayload} from '../../../../core/state-management/abstract-payload';

export interface RouterPayload extends AbstractPayload {
  commands: string[];
  extras?: NavigationExtras;
}
