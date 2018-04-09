import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerInvitation } from './customer-invitation.model';
import { API_ENDPOINT } from '../../app.constants';

@Injectable()
export class CustomerInvitationService {

   constructor(private http: HttpClient) { }

   save(customerInvitation: CustomerInvitation) {
   }
}
