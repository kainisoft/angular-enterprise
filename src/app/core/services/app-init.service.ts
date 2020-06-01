/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {TranslateService} from '@ngx-translate/core';
import {first} from 'rxjs/operators';
import {UserActions} from '../../features/base/state-management/user/user.actions';
import {AbstractService} from './abstract.service';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService extends AbstractService {
  constructor(
    http: HttpClient,
    protected service: TranslateService,
    protected configService: ConfigService,
    protected userActions: UserActions,
    protected actions: Actions,
  ) {
    super(http);
  }

  get uri(): string {
    return 'init';
  }

  init() {
    return this.get().toPromise().then((data: any) => {
      const {user, timezone, lang: {use, translations}} = data;

      this.configService.set('timezone', timezone);

      this.service.setTranslation(use, translations);
      this.service.use(use);

      setTimeout(() => new this.userActions.SetUserAction(user).dispatch()); // TODO find better solution

      return this.actions.pipe(
        ofType(this.userActions.AfterUserSetAction.TYPE),
        first()
      ).toPromise();
    }).catch((...rest) => {
      console.error('App Init');
      console.dir(rest);
    });
  }
}
