/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Component, OnInit} from '@angular/core';
import {LayoutType} from './core/constants/app.config';
import {ConfigService} from './core/services/config.service';
import {SplashScreenService} from './core/services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layoutTypes = LayoutType;
  layout = LayoutType.VERTICAL;

  constructor(
    private splashScreen: SplashScreenService,
    private configService: ConfigService
  ) {

  }

  ngOnInit(): void {
    this.configService.getAsObservable().subscribe(config => {
      const {layout} = config;

      if (layout !== this.layout) {
        this.layout = config.layout;
      }
    });
  }
}
