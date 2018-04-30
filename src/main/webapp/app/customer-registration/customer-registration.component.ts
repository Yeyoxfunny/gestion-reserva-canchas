import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsUtils } from '../shared/forms-utils';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
   selector: 'app-customer-registration',
   templateUrl: './customer-registration.component.html',
   providers: [ClienteService]
})

export class CustomerRegistrationComponent implements OnInit {
   constructor(private service: ClienteService,
      private flashMessage: FlashMessagesService) { }

   ngOnInit() { }

   onSubmit(ngForm: NgForm) {
      if (FormsUtils.isValid(ngForm)) {
          const cliente = this.buildCustomer(ngForm.value);
          this.service.save(cliente).subscribe(this.onSuccess(ngForm), this.onErrorHandler(ngForm));
      }
   }

   private onSuccess = (ngForm: NgForm) => {
     return () => {
      this.flashMessage.show('El cliente se ha registrado con éxito', { cssClass: 'alert-success', timeout: 5000});
      ngForm.resetForm();
     };
   }

   private onErrorHandler = (ngForm) => {
      return (error) => {
        this.flashMessage.show(error, { cssClass: 'alert-danger', timeout: 5000});
        ngForm.form.controls.contrasenia.reset();
        ngForm.form.controls.passwordConfirmation.reset();
      };
    }

   private buildCustomer(customer): Cliente {
      const cliente = new Cliente();
      cliente.nombres = customer.primerNombre + ' ' + this.default(customer.segundoNombre);
      cliente.apellidos = customer.primerApellido + ' ' + customer.segundoApellido;
      cliente.email = customer.email;
      cliente.celular = customer.celular;
      cliente.contrasenia = customer.contrasenia;
      cliente.numeroDocumento = customer.numeroDocumento;
      return cliente;
   }

   private default(value) {
      return value ? value : '';
   }
}
