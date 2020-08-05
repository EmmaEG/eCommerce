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

  products$: Observable<Product[]>; // los flujos de datos los colocamos con el signo $

  constructor(
    private cartService: CartService
  ) {
     this.products$ = this.cartService.cart$;
    // así no tenemos que subscribirnos simplemente es un oservable que escucha el array continuamente de los productos que agregamos

  }

  ngOnInit(): void {
  }

}
