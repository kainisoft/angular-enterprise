/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import { Component, OnInit } from '@angular/core';
import {RoutesProviderService} from '../../../core/services/routes-provider.service';
import {NavBarActions} from '../../../features/base/state-management/nav-bar/nav-bar.actions';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(
    protected navBarActions: NavBarActions,
    public routesProviderService: RoutesProviderService,
  ) { }

  ngOnInit(): void {
  }

  get logOut(): string {
    return this.routesProviderService.logout;
  }

  toggle() {
    new this.navBarActions.ToggleAction().dispatch();
  }
}
