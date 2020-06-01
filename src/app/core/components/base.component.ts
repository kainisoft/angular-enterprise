/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {OnDestroy} from '@angular/core';
import {Subject, Subscription, Unsubscribable} from 'rxjs';

export class BaseComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private subscriptions$ = new Subscription();

  get destroy() {
    return this.destroy$;
  }

  protected set subscription(observable: Unsubscribable) {
    this.subscriptions$.add(observable);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$ = null;

    this.subscriptions$.unsubscribe();
    this.subscriptions$ = null;
  }
}
