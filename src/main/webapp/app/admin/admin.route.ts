import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CustomerInvitationComponent } from './customer/customer-invitation.component';

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
         }
      ]
   }
];
