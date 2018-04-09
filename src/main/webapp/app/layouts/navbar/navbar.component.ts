import { Component, OnInit } from '@angular/core';
import { AuthenticationManagerService } from '../../shared/authentication-manager.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-navbar',
   templateUrl: 'navbar.component.html'
})

export class NavBarComponent implements OnInit {
   constructor(private authMananger: AuthenticationManagerService,
               private router: Router) { }

   ngOnInit() { }

   logout() {
      this.authMananger.logout();
      this.router.navigate(['/']);
   }
}
