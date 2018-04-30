import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

export const appRoutes: Routes = [
   {
      path: '',
      component: AuthenticationComponent
   },
   {
      path: 'registro-cliente',
      component: CustomerRegistrationComponent
   },
   {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
   },
   {
      path: 'app',
      loadChildren: './application/application.module#ApplicationModule'
   }
];
