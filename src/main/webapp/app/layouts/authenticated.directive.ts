import { Directive, ElementRef } from '@angular/core';
import { AuthenticationManagerService } from '../shared/authentication-manager.service';

@Directive({
  selector: '[appAuthenticated]'
})
export class AuthenticatedDirective {

  constructor(private elementRef: ElementRef,
    private authManager: AuthenticationManagerService) {
    if (!this.authManager.isLoggedIn()) {
      this.elementRef.nativeElement.remove();
    }
  }

}
