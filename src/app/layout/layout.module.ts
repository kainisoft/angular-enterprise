/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {NgModule} from '@angular/core';
import {BlankLayoutModule} from './blank-layout/blank-layout.module';
import {VerticalLayoutModule} from './vertical-layout/vertical-layout.module';

@NgModule({
  declarations: [

  ],
  imports: [
    VerticalLayoutModule,
    BlankLayoutModule,
  ],
  exports: [
    VerticalLayoutModule,
    BlankLayoutModule,
  ],
})
export class LayoutModule {

}
