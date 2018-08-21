import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { NavigateService } from '../services/navigate.service';

@Component({
  selector: 'app-product-detais',
  templateUrl: './product-detais.component.html',
  styleUrls: ['./product-detais.component.css']
})
export class ProductDetaisComponent implements OnInit {
  id: number;
  product: any;

  constructor(private activateRoute: ActivatedRoute,
              private productService: ProductService,
              private navigateService: NavigateService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => this.id = params['id']);
    this.productService.getProducts().subscribe((products: any) => {
      console.log(products);
      this.product = products.find(product => product.id === this.id);
    });
  }
}
