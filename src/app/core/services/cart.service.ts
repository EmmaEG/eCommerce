import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'; // añade principios reactivos

import { Product } from './../models/product.model';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = []; // 1
  private cart = new BehaviorSubject<Product[]>([]); // 2

  cart$ = this.cart.asObservable(); // 3

  constructor() { }

  addCart(product: Product) { // 4 metodo para añadir al carrtio
    this.products = [...this.products, product]; // 5
    this.cart.next(this.products); // 6
  }

  deleteCart(product: Product) {
    this.products = [...this.products.splice(0, 1), product];
    this.cart.next(this.products);
  }

}


// 1 declaramos una variable products que es un array vacío de tipo product array
/* 2 creamos la variable cart que será una instancia de BehaviorSubject, y le decimos que es de tipo array de
productos, es decir que controle el flujo de datos de este array de productos "<Product[]>" y lo inicializamos
en un array en vacío, es decir el carrito inicia con cero productos*/
/* 3 declaramos una variable publica que pueda ser preguntada por cualquier componente y que sea de tipo observable
para que cualquiera se subscriba a ella y tener los cambios en tiempo real, entonces simplemente la instanciamos
"this.cart" y le decimos que se comporte como un observable "".asObservable"*/

/* 5 cada vez que agreguen algo al carrito inserto una nueva variable, sin embargo no lo hago con el metodo
push xq cada vez voy a hacer una nueva referencia del arreglo y luego de la coma agregamos el último
producto, de esta manera estamos generando un nuevo estado del array */
/* 6  luego notificamos a todos los componentes que esten suscriptos que algo se agregó al carrito, estso
lo hago con next y luego le paso la copia del array o del nuevo estado actual "this.products"

ahora creamos un metodo para agregar productos al carrito, a este metodo le enviamos un producto (obvio)
que es de tipo product */
