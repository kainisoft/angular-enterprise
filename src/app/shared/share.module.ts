/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from './components/component.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule,

    ComponentModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule,

    ComponentModule,
  ]
})
export class ShareModule {

}
