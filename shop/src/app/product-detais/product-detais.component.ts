import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { NavigateService } from "../services/navigate.service";
import { IProduct } from "../product";

@Component({
  selector: "app-product-detais",
  templateUrl: "./product-detais.component.html",
  styleUrls: ["./product-detais.component.css"]
})
export class ProductDetaisComponent implements OnInit {
  id: number;
  product: IProduct;
  
  constructor(private activateRoute: ActivatedRoute, 
              private productService: ProductService, 
              private navigateService: NavigateService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>this.id=params["id"]);
    this.productService.getProducts().subscribe(product => {
      this.product = product.filter(product => product.id == this.id)[0];
    });
    
  }

}