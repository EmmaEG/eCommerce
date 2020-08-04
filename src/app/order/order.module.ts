import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { CustomerDataComponent } from './components/customer-data/customer-data.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';


@NgModule({
  declarations: [OrderComponent, CustomerDataComponent, PaymentPageComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OrderModule { }
