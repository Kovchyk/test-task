import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get("assets/products.json").map(res => res.json());
  }
  
}