import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar/navbar.component';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';

@NgModule({
   imports: [ CommonModule ],
   declarations: [NavBarComponent],
   providers: [ AuthenticationManagerService ],
   exports: [NavBarComponent],
})
export class LayoutsModule { }
