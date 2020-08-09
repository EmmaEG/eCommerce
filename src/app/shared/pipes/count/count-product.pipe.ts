import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'countProduct'
})
export class CountProductPipe implements PipeTransform {

  transform(products: Product[], ...args: unknown[]): any[] {
    const newList: any[] = [];
    products.forEach((element: any) => {
      const newElement = newList.find(product => product.id === element.id);
      if (!newElement) {
        element.cantidad = 1;
        element.price = element.price;
        newList.push(element);
      } else {
        const index = newList.findIndex(el => el.id === element.id);
        newList[index].cantidad++;
      }
    });
    // console.log(newList);
    return newList;
 }
}
