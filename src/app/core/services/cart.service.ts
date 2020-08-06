import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'; // añade principios reactivos

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = []; // 1
  private cart = new BehaviorSubject<Product[]>([]); // 2

  cart$ = this.cart.asObservable(); // 3

  constructor() { }

  addCart(product: Product) { // metodo para añadir al carrtio
    this.products = [...this.products, product]; // 4
    this.cart.next(this.products); // 5
  }

}


// 1 declaramos una variable products que es un array vacío de tipo product array
/* 2 una instancia de behavior de tipo array de productos, es decir que controle el flujo de datos de este
array y lo inicializamos en vacío*/
/* 3 declaramos una variable publica para que cualquiera se subscriba a ella y tener los cambios en tiempo
real */
/* 4 cada vez que agreguen algo al carrito inserto una nueva variable, sin embargo no lo hago con el metodo
push xq cada vez voy a hacer una nueva referencia del arreglo y luego de la coma agregamos el último
producto, de esta manera estamos generando un nuevo estado del array */
/* 5  luego notificamos a todos los componentes que esten subscriptos que algo se agregó al carrito, estso
lo hago con next y luego le paso la copia del estado actual*/
