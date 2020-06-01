/**
 * Kairat Bakytov
 * kainisoft@gmail.com
 */

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {RouterActions} from '../../features/base/state-management/router/router.actions';
import {SnackBarActions} from '../../features/base/state-management/snack-bar/snack-bar.actions';
import {RoutesProviderService} from './routes-provider.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    protected routerActions: RouterActions,
    protected snackBarActions: SnackBarActions,
    protected routesProviderService: RoutesProviderService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');

    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse && event.ok) {
          const {message} = event.body;

          if (message) {
            new this.snackBarActions.ShowSuccessAction({message}).dispatch();
          }

          return event.clone({body: event.body.data});
        }

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (typeof error.error === 'string') {
          new this.snackBarActions.ShowErrorAction({message: error.error}).dispatch();
        }

        if (error.status === 401) {
          new this.routerActions.NavigateAction({
            commands: [this.routesProviderService.auth]
          }).dispatch();
        }

        return throwError(error.message);
      })
    );
  }
}
