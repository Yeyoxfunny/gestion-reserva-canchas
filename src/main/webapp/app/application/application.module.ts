import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { applicationRoutes } from './application.route';
import { LayoutsModule } from '../layouts/layouts.module';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaService } from '../shared/cancha.service';
import { CommonModule } from '@angular/common';
import { ReservaInsertModalComponent } from './canchas/reserva-insert-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../shared/cliente.service';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';
import { ReservaService } from '../shared/reserva.service';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
   declarations: [
      ApplicationComponent,
      CanchasComponent,
      ReservasComponent,
      ReservaInsertModalComponent,
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(applicationRoutes),
      LayoutsModule,
      NgbModule,
      FormsModule
   ],
   entryComponents: [ReservaInsertModalComponent],
   providers: [
      CanchaService,
      ClienteService,
      ReservaService,
      AuthenticationManagerService
   ],
})
export class ApplicationModule { }
