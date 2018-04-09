import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppHttpErroHandlerService {

   constructor() { }

   handleError(error: HttpErrorResponse) {
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
