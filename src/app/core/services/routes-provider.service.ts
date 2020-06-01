/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {routeNames} from '../constants/app.route-names';

@Injectable({
  providedIn: 'root'
})
export class RoutesProviderService {
  get auth() {
    return `/${routeNames.auth}`;
  }

  get logout() {
    return `${this.auth}/${routeNames.logout}`;
  }
}
