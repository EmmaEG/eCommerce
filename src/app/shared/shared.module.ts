import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // tiene ngFor, ngIf
import { RouterModule } from '@angular/router'; // debo importar las rutas sino quedan inutilizadas
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { CountProductPipe  } from './pipes/count/count-product.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CountProductPipe
  ],
  exports: [ // le indico que todos estos modulos puedan ser usados por otros componentes
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    CountProductPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
