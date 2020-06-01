/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {
  private element: HTMLElement;
  private player: AnimationPlayer;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private animationBuilder: AnimationBuilder,
    private router: Router,
  ) {
    this.init();
  }

  protected init() {
    this.element = this.document.getElementById('root-loading');

    if (this.element) {
      this.router.events.pipe(
        filter((event => event instanceof NavigationEnd)),
        first()
      ).subscribe(() => {
        setTimeout(() => {
          this.hide();
        });
      });
    }
  }

  hide() {
    this.player = this.animationBuilder.build([
      style({opacity: 1}),
      animate('400ms ease', style({
        opacity: 0,
        zIndex: -10
      }))
    ]).create(this.element);

    setTimeout(() => {
      this.player.play();
    });
  }
}
