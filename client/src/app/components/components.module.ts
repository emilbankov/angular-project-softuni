import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing,module';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddAccessoriesComponent } from './add-accessories/add-accessories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
    AddProductsComponent,
    AddAccessoriesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    SupportComponent,
    AddProductsComponent,
    AddAccessoriesComponent,
  ]
})
export class ComponentsModule { }
