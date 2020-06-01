/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../components/content/content.module';
import {BlankLayoutComponent} from './blank-layout.component';

@NgModule({
  declarations: [
    BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContentModule,
  ],
  exports: [
    BlankLayoutComponent
  ]
})
export class BlankLayoutModule {

}
