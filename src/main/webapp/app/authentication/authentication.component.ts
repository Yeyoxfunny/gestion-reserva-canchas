import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';

import { FlashMessagesService } from 'angular2-flash-messages';
import { FormsUtils } from '../shared/forms-utils';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';
import { UsuarioService } from '../shared/usuario.service';

import { AccountResolver } from './account-resolver';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  providers: [ AuthenticationService ]
})
export class AuthenticationComponent implements OnInit {

  private login: Login;

  constructor(private service: AuthenticationService,
              private authManager: AuthenticationManagerService,
              private router: Router,
              private userService: UsuarioService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    if (this.authManager.isLoggedIn()) {
      this.userService.me().subscribe((user) => {
        const redirectURL = AccountResolver.buildRedirectURL(user);
        this.router.navigate([redirectURL]);
      }, console.error);
    }
    this.login = new Login();
  }

  registrar(loginForm) {
    if (FormsUtils.isValid(loginForm)) {
      this.service.autenticar(this.login)
          .subscribe((url) => this.router.navigate([url]), this.onErrorHandler(loginForm));
    }
  }

  private onErrorHandler = (ngForm) => {
    return (error) => {
      this.flashMessage.show(error, { cssClass: 'alert-danger', timeout: 5000});
      ngForm.resetForm();
    };
  }
}
