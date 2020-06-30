import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper; // creamos el elemento

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() { // AfterViewInit nos indica cuando los elementos hijos fueron renderizados
    this.mySwiper = new Swiper('.swiper-container');
  }
  // a new swiper le indicamos que clase va a buscar, esta clase es la definifa en la vista del banner

}

