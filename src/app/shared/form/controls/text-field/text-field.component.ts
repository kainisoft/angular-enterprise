/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Component, Input} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {Field} from '../../../../core/form/field';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends Field {
  @Input()
  type: 'text' | 'password' = 'text';

  constructor(
    controlContainer: ControlContainer
  ) {
    super(controlContainer);
  }
}
