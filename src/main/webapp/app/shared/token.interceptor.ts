import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationManagerService } from './authentication-manager.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

   constructor(private authManager: AuthenticationManagerService) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authManager.isLoggedIn()) {
         const token = this.authManager.getAuthorizationToken();
         request = request.clone({
            setHeaders: {
               Authorization: `${token.tokenType} ${token.token}`
            }
         });
      }
      return next.handle(request);
   }
}
