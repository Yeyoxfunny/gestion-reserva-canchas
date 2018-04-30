import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../shared/reserva.model';
import { ReservaService } from '../../shared/reserva.service';
import { AuthenticationManagerService } from '../../shared/authentication-manager.service';
import { ClienteService } from '../../shared/cliente.service';
import { Cliente } from '../../shared/cliente.model';

@Component({
   selector: 'app-reservas',
   templateUrl: 'reservas.component.html'
})

export class ReservasComponent implements OnInit {

   reservas: Reserva[] = [];
   constructor(private reservaService: ReservaService,
      private authenticationManager: AuthenticationManagerService,
      private clienteService: ClienteService) { }

   ngOnInit() {
      const user = this.authenticationManager.obtenerUsuario();
      this.clienteService.getByUser(user.id).subscribe(this.getAllByCliente);
   }

   getAllByCliente = (cliente: Cliente) => {
      this.reservaService.getAllByCliente(cliente.id).subscribe(reservas => this.reservas = reservas);
   }
}
