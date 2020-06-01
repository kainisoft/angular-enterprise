/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {AppConfig} from '../constants/app.config';

export const APP_CONFIG = new InjectionToken('app-config');

@NgModule()
export class ConfigModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ConfigModule
  ) {
    if (parentModule) {
      throw new Error('Config Module is already loaded! Import it in AppModule only!');
    }
  }

  static forRoot(config: AppConfig): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: APP_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
