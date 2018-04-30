import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Reserva } from './reserva.model';
import { API_ENDPOINT } from '../app.constants';
import { AppHttpErroHandlerService } from './app-http-error-handler.service';

@Injectable()
export class ReservaService {
   constructor(private http: HttpClient,
      private errorHandler: AppHttpErroHandlerService) { }

   getAllByCliente(idCliente: number): Observable<Reserva[]> {
      return this.http.get<Reserva[]>(API_ENDPOINT + '/reservas/cliente/' + idCliente)
            .catch(this.errorHandler.handleError);
   }

   save(reserva: Reserva): Observable<Reserva> {
      return this.http.post<Reserva>(API_ENDPOINT + '/reservas', reserva)
         .catch(this.errorHandler.handleError);
   }
}
