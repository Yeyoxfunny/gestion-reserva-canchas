import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'app-confirm-dialog',
   templateUrl: 'app-confirm-dialog.component.html'
})

export class AppConfirmDialogComponent implements OnInit {
   constructor(public activeModal: NgbActiveModal) { }

   ngOnInit() { }

   close(option) {
      this.activeModal.close(ConfirmOptions[option]);
   }
}

export enum ConfirmOptions {
   OK,
   CANCELED
}
