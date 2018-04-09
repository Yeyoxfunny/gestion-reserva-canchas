import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthenticationManagerService {
   constructor() { }

   save(authentication) {
      sessionStorage.setItem('authorization_token', JSON.stringify(authentication.authToken));
      sessionStorage.setItem('user', JSON.stringify(authentication.usuario));
   }

   isLoggedIn(): boolean {
      return Boolean(sessionStorage.getItem('authorization_token'))
            && Boolean(sessionStorage.getItem('user'));
   }

   getAuthorizationToken() {
         return JSON.parse(sessionStorage.getItem('authorization_token'));
   }

   obtenerUsuario(): Usuario {
      return JSON.parse(sessionStorage.getItem('user'));
   }

   logout() {
      sessionStorage.removeItem('authorization_token');
      sessionStorage.removeItem('user');
   }
}
