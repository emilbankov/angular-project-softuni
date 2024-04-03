import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iPhoneCatalogComponent } from './iphone-catalog/iphone-catalog.component';
import { iPhoneDetailsComponent } from './iphone-details/iphone-details.component';
import { iPhoneEditComponent } from './iphone-edit/iphone-edit.component';
import { RouterModule } from '@angular/router';
import { iPhoneRoutingModule } from './iphone-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    iPhoneCatalogComponent,
    iPhoneDetailsComponent,
    iPhoneEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    iPhoneRoutingModule,
    FormsModule
  ],
  exports: [
    iPhoneCatalogComponent,
    iPhoneDetailsComponent,
    iPhoneEditComponent
  ]
})
export class iPhoneModule { }
