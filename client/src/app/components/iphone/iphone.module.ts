import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iPhoneCatalogComponent } from './iphone-catalog/iphone-catalog.component';
import { iPhoneDetailsComponent } from './iphone-details/iphone-details.component';
import { iPhoneAttachAccessoryComponent } from './iphone-attach-accessory/iphone-attach-accessory.component';
import { iPhoneEditComponent } from './iphone-edit/iphone-edit.component';
import { RouterModule } from '@angular/router';
import { iPhoneRoutingModule } from './iphone-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    iPhoneCatalogComponent,
    iPhoneDetailsComponent,
    iPhoneAttachAccessoryComponent,
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
    iPhoneAttachAccessoryComponent,
    iPhoneEditComponent
  ]
})
export class iPhoneModule { }
