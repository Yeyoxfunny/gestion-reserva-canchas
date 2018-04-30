import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInvitationModalComponent } from './customer-invitation-modal.component';
import { CustomerInvitation } from './customer-invitation.model';

@Component({
   selector: 'app-customer-invitation',
   templateUrl: './customer-invitation.component.html'
})

export class CustomerInvitationComponent implements OnInit {

   constructor(private modalService: NgbModal) { }

   ngOnInit() { }

   openModal() {
      this.modalService
         .open(CustomerInvitationModalComponent)
         .result.then((invitation) => {
            if (invitation && invitation instanceof CustomerInvitation) {
               this.save(invitation);
            }
         })
         .catch(console.log);
   }

   private save(invitation: CustomerInvitation) {
      console.log(invitation);
   }
}
