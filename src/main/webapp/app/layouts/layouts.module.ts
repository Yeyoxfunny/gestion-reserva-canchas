import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar/navbar.component';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';
import { AuthenticatedDirective } from './authenticated.directive';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [ CommonModule, RouterModule ],
   declarations: [
      NavBarComponent,
      AuthenticatedDirective
   ],
   providers: [
      AuthenticationManagerService,
      AuthenticationManagerService
   ],
   exports: [NavBarComponent],
})
export class LayoutsModule { }
