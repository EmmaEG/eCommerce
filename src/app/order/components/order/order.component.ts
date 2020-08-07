import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>; // 1

  constructor(
    private cartService: CartService // 2
  ) {
     this.products$ = this.cartService.cart$; // 3

  }

  ngOnInit(): void {
  }

}

/* 1 array de productos que estamos escuchando del carrito y lo innicializamos en vacío, como es un observable
  le ponemos el signo pesos
*/
// 2 llamamos a nuestro servicio de carrito, lo inyectamos como una dependencia
// 3 escuchamos dinamicamente como agregamos productos al carrito
