/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Input} from '@angular/core';
import {AbstractControl, ControlContainer} from '@angular/forms';
import {MatFormFieldAppearance} from '@angular/material/form-field';

export class Field {
  protected cacheElement: AbstractControl;

  @Input()
  name: string;

  @Input()
  label?: string;

  @Input()
  prefix?: string;

  @Input()
  suffix?: string;

  @Input()
  fit = 100;

  @Input()
  appearance: MatFormFieldAppearance = 'outline';

  @Input()
  showError = true;

  @Input()
  set disabled(disable) {
    if (disable) {
      this.element.disable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.element.enable({
        onlySelf: true,
        emitEvent: false
      });
    }
  }

  get element() {
    return this.cacheElement || (this.cacheElement = this.control.get(this.name));
  }

  constructor(
    protected controlContainer: ControlContainer
  ) {

  }

  get control() {
    return this.controlContainer?.control;
  }
}
