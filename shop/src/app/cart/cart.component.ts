import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NavigateService } from '../services/navigate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private navigateService: NavigateService,
              private cartService: CartService) { }

  orderSuccess = false;
  totalSum = 0;

  delete(id: number) {
    this.cartService.productsArray.forEach((element, index) => {

      if (element.id === id) {
        this.cartService.productsArray.splice(index, 1);
      }

    });

    this.countTotalSum();
  }

  makeOrder() {
    const isValid = this.cartService.productsArray.some(product => product.amount < 1 || product.amount > 99);

    if (!isValid) {
      this.orderSuccess = true;
      setTimeout(() => {
        this.clear();
      }, 2000);
    } else {
      this.orderSuccess = false;
    }
    console.log(this.cartService.productsArray);
  }


  clear() {
    this.cartService.productsArray = [];
  }

  countTotalSum() {
    this.totalSum = 0;
    this.cartService.productsArray.forEach(element => {
      element.amount = parseInt(element.amount, 10);
      this.totalSum += (element.price * element.amount);
    });
  }

  ngOnInit() {
    this.countTotalSum();
  }

}
