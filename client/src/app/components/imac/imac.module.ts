import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iMacCatalogComponent } from './imac-catalog/imac-catalog.component';
import { iMacDetailsComponent } from './imac-details/imac-details.component';
import { iMacEditComponent } from './imac-edit/imac-edit.component';
import { RouterModule } from '@angular/router';
import { iMacRoutingModule } from './imac-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    iMacCatalogComponent,
    iMacDetailsComponent,
    iMacEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    iMacRoutingModule,
    FormsModule
  ],
  exports: [
    iMacCatalogComponent,
    iMacDetailsComponent,
    iMacEditComponent
  ]
})
export class iMacModule { }
