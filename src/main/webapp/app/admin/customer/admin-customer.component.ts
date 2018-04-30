import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/cliente.model';
import { ClienteService } from '../../shared/cliente.service';

@Component({
   selector: 'app-admin-customer',
   templateUrl: 'admin-customer.component.html'
})

export class AdminCustomerComponent implements OnInit {

   customers: Cliente[] = [];

   constructor(private customerService: ClienteService) { }

   ngOnInit() {
      this.customerService
               .getAll()
               .subscribe((customers) => this.customers = customers);
   }
}
