import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from './login.model';
import { API_ENDPOINT } from '../app.constants';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';
import { Usuario } from '../shared/usuario.model';
import { Authority } from '../shared/authority.enum';

@Injectable()
export class AuthenticationService {

   constructor(private http: HttpClient,
      private authenticationManagerService: AuthenticationManagerService) { }

   autenticar(login: Login) {
      return this.http
               .post(API_ENDPOINT + '/autenticar', login)
               .map(this.saveAuthentication)
               .map(this.buildRedirectURL)
               .catch(this.handleError);
   }

   private saveAuthentication = (authentication) => {
      this.authenticationManagerService.save(authentication);
      return authentication;
   }

   private buildRedirectURL(authentication) {
      const usuario: Usuario = authentication.usuario;
      if (usuario.rol === Authority.ADMINISTRADOR_SISTEMA) {
         return 'admin';
      }
      return 'app';
   }

   private handleError(error: HttpErrorResponse) {
      console.log(error);
      if (error instanceof ErrorEvent) {
         console.log(error);
      }
      let message;
      if (error.status >= 400 && error.status < 500) {
         message = error.error.message;
      } else {
         message = 'Ha ocurrido un error en el servidor';
      }
      return new ErrorObservable(message);
   }
}
