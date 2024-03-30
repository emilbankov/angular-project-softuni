import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing,module';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SupportComponent,
  ]
})
export class ComponentsModule { }
