/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FormModel} from '../form/model';

export abstract class AbstractService {
  protected api = environment.api;

  protected constructor(
    protected http: HttpClient,
  ) {

  }

  abstract get uri(): string;

  getUrl(uri: string): string {
    const url = `${this.api}/${this.uri}/${uri}`;

    return url;
  }

  get(uri: string = '') {
    const url = this.getUrl(uri);

    return this.http.get(url);
  }

  post<T extends FormModel>(uri: string, data: T) {
    const url = this.getUrl(uri);

    return this.http.post(url, data);
  }
}
