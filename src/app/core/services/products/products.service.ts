import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

import { Product } from '../../../product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient // inyecto la dependencia
  ) { }

  getAllProducts() { // este get resuelve un array de tipo product
    return this.http.get<Product[]>(`${environment.url_api}products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}products/${id}`);
  }

  CreateProduct(product: Product) {
    return this.http.post(`${environment.url_api}products`, product);
  }

}
