/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ShareModule} from '../share.module';
import {CheckboxFieldComponent} from './controls/checkbox-field/checkbox-field.component';
import {TextFieldComponent} from './controls/text-field/text-field.component';
import {FieldErrorsComponent} from './error/field-errors.component';
import { ButtonFieldComponent } from './controls/button-field/button-field.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    CheckboxFieldComponent,
    FieldErrorsComponent,
    ButtonFieldComponent,
  ],
  imports: [
    ShareModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  exports: [
    ReactiveFormsModule,
    TextFieldComponent,
    CheckboxFieldComponent,
    ButtonFieldComponent,
  ]
})
export class FormModule {

}
