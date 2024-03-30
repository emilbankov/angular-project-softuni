import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  exports: [
    LoginRegisterComponent
  ]
})
export class UserModule { }
