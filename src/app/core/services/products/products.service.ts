import { Injectable } from '@angular/core';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [ // le decimos que solo acepte un array de tipo product
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    },
    {
      id: '4',
      image: 'assets/images/stickers1.png',
      title: 'Sticker-1',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    },
    {
      id: '4',
      image: 'assets/images/stickers2.png',
      title: 'Sticker-2',
      price: 620,
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) { // recordar los tres igual siempre en JS
    return this.products.find(item => id === item.id); // si el id es igual al buscado return
  }

}
