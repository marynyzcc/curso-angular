import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
