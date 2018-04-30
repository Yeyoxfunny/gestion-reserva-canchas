import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cancha } from './cancha.model';

import { API_ENDPOINT } from '../app.constants';
import { AppHttpErroHandlerService } from './app-http-error-handler.service';

@Injectable()
export class CanchaService {
   constructor(private http: HttpClient,
      private errorHandler: AppHttpErroHandlerService) { }

   getAll(): Observable<Cancha[]> {
      return this.http.get<Cancha[]>(API_ENDPOINT + '/canchas')
               .catch(this.errorHandler.handleError);
   }

   get(id: number): Observable<Cancha> {
      return this.http.get<Cancha>(API_ENDPOINT + '/canchas/' + id)
                  .catch(this.errorHandler.handleError);
   }

   insert(cancha: Cancha): Observable<Cancha> {
      return this.http.post<Cancha>(API_ENDPOINT + '/canchas', cancha)
         .catch(this.errorHandler.handleError);
   }

   remove(id: number) {
         return this.http.delete(API_ENDPOINT + '/canchas/' + id)
            .catch(this.errorHandler.handleError);
   }
}
