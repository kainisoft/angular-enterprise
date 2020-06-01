/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(
    protected matSnackBar: MatSnackBar
  ) {
  }

  open(message: string) {
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
