import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../features/base/state-management/user/user.state';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarComponent {
  @Input()
  user: User;

  constructor() { }

  onError() {
    debugger
  }
}
