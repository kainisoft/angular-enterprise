/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {first, map, tap} from 'rxjs/operators';
import {RouterActions} from '../../features/base/state-management/router/router.actions';
import {UserReducer} from '../../features/base/state-management/user/user.reducer';
import {RoutesProviderService} from '../services/routes-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    protected userReducer: UserReducer,
    protected routerActions: RouterActions,
    protected routesProviderService: RoutesProviderService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userReducer.selectUser().pipe(
      first(),
      map(user => !!user),
      tap(isAuth => {
        if (!isAuth) {
          new this.routerActions.NavigateAction({
            commands: [this.routesProviderService.auth]
          }).dispatch();
        }
      })
    );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
