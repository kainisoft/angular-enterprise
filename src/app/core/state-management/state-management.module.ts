/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';
import {SseActions} from '../../features/base/state-management/sse/sse.actions';
import {SseEffects} from '../../features/base/state-management/sse/sse.effects';
import {SseReducer} from '../../features/base/state-management/sse/sse.reducer';
import {UserActions} from '../../features/base/state-management/user/user.actions';
import {UserEffects} from '../../features/base/state-management/user/user.effects';
import {UserReducer} from '../../features/base/state-management/user/user.reducer';
import {NavBarActions} from '../../features/base/state-management/nav-bar/nav-bar.actions';
import {NavBarEffects} from '../../features/base/state-management/nav-bar/nav-bar.effects';
import {NavBarReducer} from '../../features/base/state-management/nav-bar/nav-bar.reducer';
import {RouterActions} from '../../features/base/state-management/router/router.actions';
import {RouterEffects} from '../../features/base/state-management/router/router.effects';
import {RouterReducer} from '../../features/base/state-management/router/router.reducer';
import {SnackBarActions} from '../../features/base/state-management/snack-bar/snack-bar.actions';
import {SnackBarEffects} from '../../features/base/state-management/snack-bar/snack-bar.effects';
import {SnackBarReducer} from '../../features/base/state-management/snack-bar/snack-bar.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({}, {
      metaReducers: [(reducer) => {
        return (state, action) => { // TODO remove hard code
          if ('[USER] Logout user' === action.type) {
            state = {};
          }

          return reducer(state, action);
        };
      }]
    }),
    EffectsModule.forRoot([
      UserEffects,
      RouterEffects,
      SnackBarEffects,
      NavBarEffects,
      SseEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
  ],
  providers: [
    UserReducer,
    UserActions,

    RouterReducer,
    RouterActions,

    SnackBarReducer,
    SnackBarActions,

    NavBarReducer,
    NavBarActions,

    SseReducer,
    SseActions,
  ]
})
export class StateManagementModule {
  constructor(
    userReducer: UserReducer,
    routerReducer: RouterReducer,
    snackBarReducer: SnackBarReducer,
    navBarReducer: NavBarReducer,
    sseReducer: SseReducer,
  ) {
    userReducer.register();
    routerReducer.register();
    snackBarReducer.register();
    navBarReducer.register();
    sseReducer.register();
  }
}
