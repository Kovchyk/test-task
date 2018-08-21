import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';

@Injectable()
export class AuthService {

  constructor(private navigateService: NavigateService) { }
  login: boolean = false;
  loginButtonValue: string = 'Login';

  islogin() {
    this.login = !this.login;

    if (this.login) {
      this.loginButtonValue = 'LogOut';
      this.navigateService.goToProducts();
    } else {
      this.loginButtonValue = 'Login';
      this.navigateService.goToWelcome();
    }

  }

  isLoggedIn(): boolean {
    return this.login;
  }
}
