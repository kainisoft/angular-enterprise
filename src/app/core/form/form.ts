/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {EventEmitter, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormModel} from './model';

export class Form<T extends FormModel> {
  form: FormGroup;

  @Output()
  submitForm = new EventEmitter<T>();

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submitForm.emit(this.form.value);
    }
  }

  reset() {
    this.form.reset();
  }
}
