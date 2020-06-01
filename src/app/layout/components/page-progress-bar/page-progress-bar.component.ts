/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import { Component, OnInit } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {BaseComponent} from '../../../core/components/base.component';

@Component({
  selector: 'app-page-progress-bar',
  templateUrl: './page-progress-bar.component.html',
  styleUrls: ['./page-progress-bar.component.scss']
})
export class PageProgressBarComponent extends BaseComponent implements OnInit {
  isLoading = false;

  constructor(
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart:
          this.isLoading = true;
          break;

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.isLoading = false;
          break;
      }
    });
  }
}
