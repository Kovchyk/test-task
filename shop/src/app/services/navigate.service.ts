import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigateService {

  constructor(private router: Router) { }

  goToProducts() {
    this.router.navigate(['product'], {queryParamsHandling: 'preserve'});
  }

  goToBuyPage(id: number, name: string) {
    this.router.navigate(['purchase', id]);
  }

  goToWelcome() {
    this.router.navigate(['']);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
