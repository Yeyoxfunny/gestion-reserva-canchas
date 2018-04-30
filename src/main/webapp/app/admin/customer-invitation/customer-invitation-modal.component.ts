import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInvitation } from './customer-invitation.model';
import { FormsUtils } from '../../shared/forms-utils';

@Component({
   selector: 'app-customer-invitation-modal',
   templateUrl: './customer-invitation-modal.component.html'
})

export class CustomerInvitationModalComponent implements OnInit {

  private invitacion: CustomerInvitation;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.invitacion = new CustomerInvitation();
  }

  invitar(invitadoNgForm) {
    if (FormsUtils.isValid(invitadoNgForm)) {
      this.activeModal.close(this.invitacion);
    }
  }
}
