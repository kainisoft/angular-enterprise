/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AppConfig} from '../constants/app.config';
import {APP_CONFIG} from '../config/config.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject = new BehaviorSubject(this.config);

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) {

  }

  get(key: keyof AppConfig) {
    return this.config[key] ?? null;
  }

  set(key: keyof AppConfig, value: any) {
    const config = Object.assign({}, this.config) as any;

    config[key] = value;

    this.configSubject.next(config);
  }

  get timezone(): string {
    return this.get('timezone') as any;
  }

  getAsObservable() {
    return this.configSubject.asObservable();
  }
}
