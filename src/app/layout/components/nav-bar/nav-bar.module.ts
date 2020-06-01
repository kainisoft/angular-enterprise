/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ShareModule} from '../../../shared/share.module';
import {NavBarComponent} from './nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    NavBarComponent
  ],
})
export class NavBarModule {

}
