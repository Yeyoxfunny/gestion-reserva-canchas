import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampoDeportivoModalComponent } from './campo-deportivo-modal.component';
import { CanchaService } from '../../shared/cancha.service';
import { Cancha } from '../../shared/cancha.model';
import { AppConfirmDialogComponent, ConfirmOptions } from '../../shared/confirm-dialog/app-confirm-dialog.component';

@Component({
   selector: 'app-campos-deportivos',
   templateUrl: 'campos-deportivos.component.html'
})

export class CamposDeportivosComponent implements OnInit {

   canchas: Cancha[] = [];

   constructor(private modalService: NgbModal,
      private canchaService: CanchaService) { }

   ngOnInit() {
      this.loadAllCamposDeportivos();
   }

   loadAllCamposDeportivos() {
      this.canchaService.getAll().subscribe((canchas) => this.canchas = canchas);
   }

   openModal() {
      this.modalService
         .open(CampoDeportivoModalComponent)
         .result.then((cancha) => {
            if (cancha && cancha instanceof Cancha) {
               this.save(cancha);
            }
         })
         .catch(console.log);
   }

   save(cancha: Cancha) {
      this.canchaService.insert(cancha)
         .subscribe(this.loadAllCamposDeportivos.bind(this));
   }

   confirmDeletion(id: number) {
      this.modalService
         .open(AppConfirmDialogComponent)
         .result.then((option: ConfirmOptions) => {
            if (option === ConfirmOptions.OK) {
               this.remove(id);
            }
         });
   }

   remove = (id: number) => {
      this.canchaService
         .remove(id)
         .subscribe(this.loadAllCamposDeportivos.bind(this));
   }
}
