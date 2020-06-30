import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// ActivatedRoute para la inyección de dependencias y Params que es de tipado

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // generamos una variable publica para poder reenderizar product a la vista
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService // inyecto el servicio para usar el metodo getProduct
  ) { }

  ngOnInit() {// 1)
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // capturo el id
      this.fetchProduct(id);
     // this.product = this.productsService.getProduct(id); // envío el id al método getProduct
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.CreateProduct(newProduct)
    .subscribe(product => {
      console.log(product);
  });

}

}

/* 1) quiero los parametros que tenga en la ruta y nos subscribimos para escuchar los cambios que haya
en los paramteros y lo tipamos le decimos que los parametros sean de tipo params y ejecutamos la funcion
aqui vamos a recibir todos los parametros que tenga la ruta */
