import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iPhoneCatalogComponent } from './iphone-catalog/iphone-catalog.component';
import { iPhoneDetailsComponent } from './iphone-details/iphone-details.component';
import { iPhoneEditComponent } from './iphone-edit/iphone-edit.component';
import { iPhoneAttachAccessoryComponent } from './iphone-attach-accessory/iphone-attach-accessory.component';
import { RouterModule } from '@angular/router';
import { iPhoneRoutingModule } from './iphone-routing.module';



@NgModule({
  declarations: [
    iPhoneCatalogComponent,
    iPhoneDetailsComponent,
    iPhoneEditComponent,
    iPhoneAttachAccessoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    iPhoneRoutingModule
  ],
  exports: [
    iPhoneCatalogComponent,
    iPhoneDetailsComponent,
    iPhoneEditComponent,
    iPhoneAttachAccessoryComponent
  ]
})
export class iPhoneModule { }
