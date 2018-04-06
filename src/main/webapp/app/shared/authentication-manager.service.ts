import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationManagerService {
   constructor() { }

   save(authentication) {
      sessionStorage.setItem('authorization_token', JSON.stringify(authentication.authToken));
      sessionStorage.setItem('user', JSON.stringify(authentication.usuario));
   }
}
