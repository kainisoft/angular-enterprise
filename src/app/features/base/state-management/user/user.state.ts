/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {AbstractEntityState, AbstractState} from '../../../../core/state-management/abstract-state';

export interface User extends AbstractState {
  agentId: number;
  displayName: string;
  avatar: string;
  online: boolean;
  type: 'fake' | 'user' | 'agent';
  data: {
    about: {
      label: string;
      value: string;
    };
    location: {
      label: string;
      value: string;
    };
    additional: {[key: string]: string | string[]};
    note: string;
  };
}

export type UserList = User[];

export interface UserState extends AbstractEntityState<User> {
  user: User;
}
