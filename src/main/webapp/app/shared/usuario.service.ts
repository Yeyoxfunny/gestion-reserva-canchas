import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { AuthenticationManagerService } from './authentication-manager.service';
import { Usuario } from './usuario.model';
import { API_ENDPOINT } from '../app.constants';
import { AppHttpErroHandlerService } from './app-http-error-handler.service';

@Injectable()
export class UsuarioService {

   constructor(private http: HttpClient,
               private authManager: AuthenticationManagerService,
               private errorHandler: AppHttpErroHandlerService) {
   }

   me(): Observable<Usuario> {
      const usuario = this.authManager.obtenerUsuario();
      return this.http.get<Usuario>(`${API_ENDPOINT}/usuarios/${usuario.id}`)
                  .catch(this.errorHandler.handleError);
   }
}
