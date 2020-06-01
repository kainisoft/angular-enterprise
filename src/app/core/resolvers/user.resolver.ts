import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {UserReducer} from '../../features/base/state-management/user/user.reducer';
import {User} from '../../features/base/state-management/user/user.state';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(
    protected userReducer: UserReducer,
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userReducer.selectUser().pipe(first());
  }
}
