import { Directive, ElementRef } from '@angular/core';
// ElementRef es el que cambiará el comportamiento de nuestro element hay que agregarlo
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef // inyeccion de dependencias
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
