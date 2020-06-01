/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {FormControl, ValidationErrors, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  protected readonly emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    protected translateService: TranslateService
  ) {

  }

  protected replaceWithMessage(validationResult: ValidationErrors | null, message) {
    for (const key in validationResult) {
      if (validationResult.hasOwnProperty(key)) {
        validationResult[key] = message;
      }
    }

    return validationResult;
  }

  get required() {
    return (formControl: FormControl) => {
      return this.replaceWithMessage(
        Validators.required(formControl),
        this.translateService.instant('console_error_required')
      );
    };
  }

  get email() {
    return (formControl: FormControl) => {
      return this.replaceWithMessage(
        Validators.pattern(this.emailPattern)(formControl),
        this.translateService.instant('console_error_email_invalid')
      );
    };
  }
}
