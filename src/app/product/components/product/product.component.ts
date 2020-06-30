/* un decorador le da un contexto a un elemento en angular, entonces un decorador es la manera en que
angular sabe esta clase que tipo de roll va acumplir, si va a ser un componente, un servicio, un pipe
Los decoradores se utilizan antes de definir una clase y se definen con un @*/
/* property binding podemos enviar por medio de una propiedad datos y recibirlas por medio de eventos
inputs y outputs*/
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product; // recibimos los datos desde otro componente
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); /* emitimos un valor al componente
    padre, debemos inicializar el evento con new EventEmitter y lo inicializamos sin ningun valor, sin em-
    bargo tmb lo podemos inicializar con el valor que yo quiera*/

    today = new Date();

    constructor() {
        console.log('1. constructor');
    }
/*
    ngOnChanges(changes: SimpleChanges) { // deteccion de cambios nativa de angular (colisiona con ngDoChe)
        console.log('2. ngOnChanges');
        console.log(changes);
    }
*/
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() { // detección de cambios a tu manera (colisiona con ngOnChanges, o sea las 2 juntas)
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

}

