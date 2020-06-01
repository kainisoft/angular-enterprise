/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Component} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {Field} from '../../../../core/form/field';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent extends Field {
  constructor(
    controlContainer: ControlContainer
  ) {
    super(controlContainer);
  }
}
