import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CustomerInvitationComponent } from './customer-invitation/customer-invitation.component';
import { AdminCustomerComponent } from './customer/admin-customer.component';
import { CamposDeportivosComponent } from './campos-deportivos/campos-deportivos.component';
import { CampoDeportivoDetailsComponent } from './campos-deportivos/campo-deportivo-details.component';

export const adminRoutes: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            component: AdminComponent
         },
         {
            path: 'invitaciones',
            component: CustomerInvitationComponent
         },
         {
            path: 'clientes',
            component: AdminCustomerComponent
         },
         {
            path: 'campos',
            children: [
               {
                  path: '',
                  component: CamposDeportivosComponent
               },
               {
                  path: ':id',
                  component: CampoDeportivoDetailsComponent
               }
            ]
         }
      ]
   }
];
