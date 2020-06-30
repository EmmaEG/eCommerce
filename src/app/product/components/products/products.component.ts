import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  ngOnInit(): void {
  }

  clickProduct(id: number) { // nuestro output emite el id que es de tipo number
    console.log('product');
    console.log(id);
  }

}
