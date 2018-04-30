import { Component, OnInit } from '@angular/core';
import { CanchaService } from '../../shared/cancha.service';
import { Cancha } from '../../shared/cancha.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaInsertModalComponent } from './reserva-insert-modal.component';
import { Reserva } from '../../shared/reserva.model';
import { ReservaService } from '../../shared/reserva.service';

@Component({
  selector: 'app-canchas',
  templateUrl: 'canchas.component.html'
})

export class CanchasComponent implements OnInit {

  canchas: Cancha[] = [];

  constructor(private canchasService: CanchaService,
    private reservaService: ReservaService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.canchasService.getAll().subscribe(canchas => this.canchas = canchas);
  }

  reservar(idCancha: number) {
    this.modalService
      .open(ReservaInsertModalComponent)
      .result.then((reserva: Reserva) => {
        if (reserva && reserva instanceof Reserva) {
          reserva.idCancha = idCancha;
          this.crearReserva(reserva);
        }
      })
      .catch(console.log);
  }

  crearReserva = (reserva: Reserva) => {
    console.log(reserva);
    this.reservaService.save(reserva).subscribe(console.log, console.error);
  }
}
