import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.route';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerInvitationComponent } from './customer-invitation/customer-invitation.component';
import { CustomerInvitationModalComponent } from './customer-invitation/customer-invitation-modal.component';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';
import { AdminCustomerComponent } from './customer/admin-customer.component';
import { ClienteService } from '../shared/cliente.service';
import { CamposDeportivosComponent } from './campos-deportivos/campos-deportivos.component';
import { CampoDeportivoModalComponent } from './campos-deportivos/campo-deportivo-modal.component';
import { CanchaService } from '../shared/cancha.service';
import { CampoDeportivoDetailsComponent } from './campos-deportivos/campo-deportivo-details.component';
import { AppConfirmDialogComponent } from '../shared/confirm-dialog/app-confirm-dialog.component';

@NgModule({
   declarations: [
      AdminComponent,
      CustomerInvitationComponent,
      CustomerInvitationModalComponent,
      AdminCustomerComponent,
      CamposDeportivosComponent,
      CampoDeportivoModalComponent,
      CampoDeportivoDetailsComponent,
      AppConfirmDialogComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(adminRoutes),
      NgbModule,
      FormsModule,
      LayoutsModule
   ],
   entryComponents: [
      CustomerInvitationModalComponent,
      CampoDeportivoModalComponent,
      AppConfirmDialogComponent
   ],
   providers: [ClienteService, CanchaService],
})
export class AdminModule { }
