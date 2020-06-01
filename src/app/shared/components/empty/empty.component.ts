/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent implements OnInit {
  @Input()
  label = '';

  @Input()
  icon = 'search';

  constructor() { }

  ngOnInit(): void {
  }

}
