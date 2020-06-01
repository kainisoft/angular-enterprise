/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {EmptyComponent} from './empty/empty.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { AvatarComponent } from './avatar/avatar.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmptyComponent,
    AvatarComponent,
    UserAvatarComponent,
  ],
  imports: [
    MatIconModule,
    MatListModule,
  ],
  exports: [
    SpinnerComponent,
    EmptyComponent,
    AvatarComponent,
    UserAvatarComponent,
  ]
})
export class ComponentModule {

}
