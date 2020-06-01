/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {APP_BASE_HREF} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appConfig} from './core/constants/app.config';
import {ConfigModule} from './core/config/config.module';
import {CoreModule} from './core/core.module';
import {InterceptorService} from './core/services/interceptor.service';
import {AppInitService} from './core/services/app-init.service';
import {LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),

    MatSnackBarModule,

    CoreModule,
    ConfigModule.forRoot(appConfig),
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppInitService],
      useFactory: (appInitService: AppInitService) => () => appInitService.init()
    }
  ],
})
export class AppModule { }
