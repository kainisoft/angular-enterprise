/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import { Component, OnInit } from '@angular/core';
import {RoutesProviderService} from '../../../core/services/routes-provider.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public routesProviderService: RoutesProviderService,
  ) { }

  ngOnInit(): void {
  }

}
