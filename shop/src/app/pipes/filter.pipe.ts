import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], name: string): object {
    if (products == null) {
      return null;
    }

    return name 
    ? products.filter(item => item.name.toLowerCase().indexOf(name) !== -1)
    : products;
  }

}