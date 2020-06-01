/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractService} from '../../../core/services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService {
  constructor(
    http: HttpClient
  ) {
    super(http);
  }

  get uri(): string {
    return 'user';
  }

  loadData(id: number): Observable<any> {
    return this.get(`${id}/data`);
  }
}
