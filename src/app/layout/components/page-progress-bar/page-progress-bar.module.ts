/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {PageProgressBarComponent} from './page-progress-bar.component';

@NgModule({
  declarations: [
    PageProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
  ],
  exports: [
    PageProgressBarComponent
  ]
})
export class PageProgressBarModule {

}
