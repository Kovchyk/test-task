import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { CartService } from "../services/cart.service";
import { NavigateService } from "../services/navigate.service";
import { IProduct } from "../product";

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: ["./purchase.component.css"]
})
export class PurchaseComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, 
              private productService: ProductService, 
              private navigateService: NavigateService,
              private cartService: CartService) { }

  id: number;
  product;
  amount: number = 1;
  comment: string = "";

  addProduct() {
    this.product.amount = +this.amount;
    this.product.comment = this.comment;  

    if (this.cartService.productsArray.length) {

      this.cartService.productsArray.forEach((product, index) => {
        if (product.id === this.product.id) {
          product.amount = parseInt(product.amount);
          product.amount += +this.amount;
        } 
        return;
      });

      if (!this.cartService.productsArray.some(product => product.id === this.product.id)) {
        this.cartService.productsArray.push(this.product);
      }
    } else {
      this.cartService.productsArray.push(this.product);
    }
    
    this.navigateService.goToProducts();
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>this.id=params["id"]);
    this.productService.getProducts().subscribe(product => {
      this.product = product.filter(product => product.id === +this.id)[0];
    });
  }

}