/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Component, Input} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {Field} from '../../../../core/form/field';

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent extends Field {
  @Input()
  color: ThemePalette;

  @Input()
  icon?: string;

  @Input()
  type: 'submit' | 'button' = 'submit';

  isDisabled;

  @Input()
  set disabled(disable) {
    this.isDisabled = disable;
  }

  constructor(
    controlContainer: ControlContainer
  ) {
    super(controlContainer);
  }
}
