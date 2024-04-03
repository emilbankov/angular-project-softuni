import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { loggedAuthActivate } from '../guards/logged-auth.activate';

const routes: Routes = [
    { path: "login-register", component: LoginRegisterComponent, canActivate: [loggedAuthActivate] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
