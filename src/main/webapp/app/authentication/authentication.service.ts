import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AUTENTICACION_URL } from '../app.constants';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';
import { AppHttpErroHandlerService } from '../shared/app-http-error-handler.service';

import { Login } from './login.model';
import { Usuario } from '../shared/usuario.model';
import { Authority } from '../shared/authority.enum';
import { AccountResolver } from './account-resolver';

@Injectable()
export class AuthenticationService {

   constructor(private http: HttpClient,
      private authenticationManagerService: AuthenticationManagerService,
      private errorHandler: AppHttpErroHandlerService) { }

   autenticar(login: Login) {
      return this.http
               .post(AUTENTICACION_URL, login)
               .map(this.saveAuthentication)
               .map(this.buildRedirectURL)
               .catch(this.errorHandler.handleError);
   }

   private saveAuthentication = (authentication) => {
      this.authenticationManagerService.save(authentication);
      return authentication;
   }

   private buildRedirectURL(authentication) {
      return AccountResolver.buildRedirectURL(authentication.usuario);
   }

}
