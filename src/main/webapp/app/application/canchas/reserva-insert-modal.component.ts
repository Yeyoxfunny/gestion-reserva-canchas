import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { AuthenticationManagerService } from '../../shared/authentication-manager.service';
import { ClienteService } from '../../shared/cliente.service';
import { Reserva } from '../../shared/reserva.model';

const today = new Date();
today.setHours(0, 0, 0, 0);

@Component({
   selector: 'app-reserva-insert-modal',
   templateUrl: 'reserva-insert.component.html'
})

export class ReservaInsertModalComponent implements OnInit {

   model: NgbDateStruct;
   time = { hour: 7, minute: 0 };
   meridian = true;
   numeroHoras = 1;

   constructor(public activeModal: NgbActiveModal,
      private dateConfig: NgbDatepickerConfig,
      private authenticationManager: AuthenticationManagerService,
      private clienteService: ClienteService) { }

   ngOnInit() {
      this.dateConfig.minDate = {
         year: today.getFullYear(),
         month: today.getMonth() + 1,
         day: today.getDay()
      };

      this.dateConfig.markDisabled = (date: NgbDateStruct) => {
         const d = new Date(date.year, date.month - 1, date.day);
         return d < today;
      };
   }

   toggleMeridian() {
      this.meridian = !this.meridian;
   }

   close() {
      const user = this.authenticationManager.obtenerUsuario();
      this.clienteService
      .getByUser(user.id)
      .subscribe((cliente) => {
         this.activeModal.close(this.builReserva(cliente));
      });
   }

   formatDate() {
      const d = new Date(this.model.year, this.model.month - 1, this.model.day, this.time.hour, this.time.minute);
      return moment(d).format('YYYY/MM/DD HH:mm:ss');
   }

   private builReserva = (cliente) => {
      const reserva = new Reserva();
      reserva.fecha = this.formatDate();
      reserva.cantidadHoras = this.numeroHoras;
      reserva.idCliente = cliente.id;
      return reserva;
   }
}
