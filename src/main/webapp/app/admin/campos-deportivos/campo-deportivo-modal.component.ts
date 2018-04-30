import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cancha } from '../../shared/cancha.model';

@Component({
   selector: 'app-campo-deportivo-modal',
   templateUrl: 'campo-deportivo-modal.component.html'
})

export class CampoDeportivoModalComponent implements OnInit {

   cancha: Cancha;
   constructor(public activeModal: NgbActiveModal) { }

   ngOnInit() {
      this.cancha = new Cancha();
   }

   save() {
      this.activeModal.close(this.cancha);
   }
}
