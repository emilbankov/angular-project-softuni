import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iMacCatalogComponent } from './imac-catalog/imac-catalog.component';
import { iMacEditComponent } from './imac-edit/imac-edit.component';
import { iMacDetailsComponent } from './imac-details/imac-details.component';
import { iMacAttachAccessoryComponent } from './imac-attach-accessory/imac-attach-accessory.component';
import { RouterModule } from '@angular/router';
import { iMacRoutingModule } from './imac-routing.module';



@NgModule({
  declarations: [
    iMacCatalogComponent,
    iMacEditComponent,
    iMacDetailsComponent,
    iMacAttachAccessoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    iMacRoutingModule
  ],
  exports: [
    iMacCatalogComponent,
    iMacEditComponent,
    iMacDetailsComponent,
    iMacAttachAccessoryComponent
  ]
})
export class iMacModule { }
