/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
  @Input()
  field: AbstractControl;

  get hasErrors() {
    return !!this.field.errors;
  }

  errorKeys() {
    return this.field.errors ? Object.keys(this.field.errors) : [];
  }

  trackError(index: number, error: string) {
    return error;
  }

  hasError(error) {
    return this.field.touched && this.field.hasError(error);
  }
}
