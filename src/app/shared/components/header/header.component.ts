import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'; //  importamos el pipe

import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    /* 1
     this.cartService.cart$.subscribe(products => {
       console.log(products);
       this.total = products.length;
     });
    */
    this.total$ = this.cartService.cart$
    .pipe( // 2
      map(products => products.length) // 3
    );
   }

  ngOnInit(): void {
  }

}

/*
1 Suscripcion que escucha los productos que se agregan al carrito y guardamos en la variable total la cantidad
de productos agregados para mostrarlo en el icono rojo del carrito, sin embargo lo vamos a comentar porque po
demos hacer esta escucha con un pipe.
Angular tiene una forma de procesar los flujos de datos, cualquier operacion que yo quiera hacer con un flujo
de datos reactivos lo puedo preprocesar con un pipe y agregar mejor funcionalidad.
Importamos el operador map que se utiliza para tranformar, y es lo que queremos hacer, queremos transformar el
valor que nos llega por uno nuevo. Es una lista de productos y lo que quier es un contador. es lo que tenemos
con products.length con el susbcribe pero de una forma mas sofisticada.

2 agrego la instrucción pipe 
3 agregoo el pipe map que va a obtener los productos y luego sentencio como los voy a transformar, entonces es
una lista de productos y a que la quiero transformar al tamaño de esa lista

Lugo desde la vista usamos total$ y ustilizamos un pipe de Angular que se llama async este pipe automaticamente
hace la suscripcion y cuando el elemento ya no se este utilizando va a desuscribirse evitando perdidas de memoria
*/
