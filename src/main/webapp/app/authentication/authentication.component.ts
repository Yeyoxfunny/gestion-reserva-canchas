import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { AuthenticationService } from './authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  providers: [ AuthenticationService ]
})
export class AuthenticationComponent implements OnInit {

  private login: Login;

  constructor(private service: AuthenticationService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.login = new Login();
  }

  registrar(loginForm) {
    if (loginForm.form.invalid) {
      this.setDirtyFormControls(loginForm.form.controls);
    } else {
      this.service.autenticar(this.login)
          .subscribe(console.log, this.onErrorHandler(loginForm));
    }
  }

  private onErrorHandler = (ngForm) => {
    return (error) => {
      this.flashMessage.show(error, { cssClass: 'alert-danger', timeout: 5000});
      ngForm.resetForm();
    };
  }

  private setDirtyFormControls(controls) {
    for (const i in controls) {
      controls[i].markAsDirty();
    }
  }

}
