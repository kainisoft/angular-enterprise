/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../components/content/content.module';
import {NavBarModule} from '../components/nav-bar/nav-bar.module';
import {PageProgressBarModule} from '../components/page-progress-bar/page-progress-bar.module';
import {ToolBarModule} from '../components/tool-bar/tool-bar.module';
import {VerticalLayoutComponent} from './vertical-layout.component';

@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageProgressBarModule,
    ToolBarModule,
    NavBarModule,
    ContentModule,

    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [
    VerticalLayoutComponent
  ],
})
export class VerticalLayoutModule {

}
