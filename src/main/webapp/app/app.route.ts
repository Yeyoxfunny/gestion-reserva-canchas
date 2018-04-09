import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
   {
      path: '',
      component: AuthenticationComponent
   },
   {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
   }
];
