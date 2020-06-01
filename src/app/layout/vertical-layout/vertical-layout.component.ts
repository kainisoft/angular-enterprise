/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../core/components/base.component';
import {NavBarReducer} from '../../features/base/state-management/nav-bar/nav-bar.reducer';

@Component({
  selector: 'app-vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent extends BaseComponent implements OnInit {
  isOpen = this.navBarReducer.selectIsOpen();

  constructor(
    protected navBarReducer: NavBarReducer
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
