import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing,module';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SupportComponent,
    ErrorComponent,
  ]
})
export class ComponentsModule { }
