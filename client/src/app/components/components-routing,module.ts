import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddAccessoriesComponent } from './add-accessories/add-accessories.component';
import { AuthActivate } from './guards/auth.activate';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'support', component: SupportComponent },
    { path: 'add-products', component: AddProductsComponent, canActivate: [AuthActivate] },
    { path: 'add-accessories', component: AddAccessoriesComponent, canActivate: [AuthActivate] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
