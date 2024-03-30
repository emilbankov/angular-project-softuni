import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'support', component: SupportComponent },
    { path: 'add-products', component: AddProductsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
