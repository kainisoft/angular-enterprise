/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ToolBarComponent} from './tool-bar.component';

@NgModule({
  declarations: [
    ToolBarComponent
  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    TranslateModule,
    MatDividerModule,
  ],
  exports: [
    ToolBarComponent,
  ],
})
export class ToolBarModule {

}
