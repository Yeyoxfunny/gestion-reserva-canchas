import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cliente } from './cliente.model';
import { CUSTOMER_REGISTRATION, API_ENDPOINT } from '../app.constants';
import { AppHttpErroHandlerService } from './app-http-error-handler.service';

@Injectable()
export class ClienteService {
   constructor(private http: HttpClient,
               private errorHandler: AppHttpErroHandlerService) { }

   save(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(CUSTOMER_REGISTRATION, cliente)
                  .catch(this.errorHandler.handleError);
   }

   getAll(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(API_ENDPOINT + '/clientes')
                  .catch(this.errorHandler.handleError);
   }

   getByUser(idUser: number): Observable<Cliente> {
      return this.http.get<Cliente>(API_ENDPOINT + '/clientes/usuario/' + idUser)
               .catch(this.errorHandler.handleError);
   }

}
