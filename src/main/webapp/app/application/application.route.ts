import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { CanchasComponent } from './canchas/canchas.component';
import { ReservasComponent } from './reservas/reservas.component';

export const applicationRoutes: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            component: ApplicationComponent
         },
         {
            path: 'canchas',
            component: CanchasComponent
         },
         {
            path: 'mis-reservas',
            component: ReservasComponent
         }
      ]
   }
];
