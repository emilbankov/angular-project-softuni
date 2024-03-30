import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing,module';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { AddProductsComponent } from './add-products/add-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
    AddProductsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SupportComponent,
    AddProductsComponent,
  ]
})
export class ComponentsModule { }
