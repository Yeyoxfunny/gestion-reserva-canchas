import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.route';
import { AuthenticationManagerService } from './shared/authentication-manager.service';
import { AppHttpErroHandlerService } from './shared/app-http-error-handler.service';
import { UsuarioService } from './shared/usuario.service';
import { TokenInterceptor } from './shared/token.interceptor';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    LayoutsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthenticationManagerService,
    AppHttpErroHandlerService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
