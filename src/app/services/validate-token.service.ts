import { Injectable, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenService {

   router = inject(Router);

  isLogin() {
    this.router.navigate(['login']);
    return false;
  }
}
