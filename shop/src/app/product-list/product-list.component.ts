import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { NavigateService } from '../services/navigate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
              private navigateService: NavigateService,
              private route: ActivatedRoute) { }

  products;
  name = '';
  test;

  ngOnInit() {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products;
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['filterBy'] || '';
    });

  }

  sortLower() {
    this.products.sort(function(a, b) {
      return a.price - b.price;
    });
  }

  sortHigher() {
    this.products.sort(function(a, b) {
      return b.price - a.price;
    });
  }

}
