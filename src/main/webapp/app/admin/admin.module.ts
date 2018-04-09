import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.route';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerInvitationComponent } from './customer/customer-invitation.component';
import { CustomerInvitationModalComponent } from './customer/customer-invitation-modal.component';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
   declarations: [
      AdminComponent,
      CustomerInvitationComponent,
      CustomerInvitationModalComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(adminRoutes),
      NgbModule,
      FormsModule,
      LayoutsModule
   ],
   entryComponents: [CustomerInvitationModalComponent],
   providers: [],
})
export class AdminModule { }
