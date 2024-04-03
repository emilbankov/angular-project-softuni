import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iPadCatalogComponent } from './ipad-catalog/ipad-catalog.component';
import { iPadDetailsComponent } from './ipad-details/ipad-details.component';
import { iPadEditComponent } from './ipad-edit/ipad-edit.component';
import { RouterModule } from '@angular/router';
import { iPadRoutingModule } from './ipad-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    iPadCatalogComponent,
    iPadDetailsComponent,
    iPadEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    iPadRoutingModule,
    FormsModule
  ],
  exports: [
    iPadCatalogComponent,
    iPadDetailsComponent,
    iPadEditComponent
  ]
})
export class iPadModule { }
