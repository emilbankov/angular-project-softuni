import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddAccessoriesComponent } from './add-accessories/add-accessories.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'support', component: SupportComponent },
    { path: 'add-products', component: AddProductsComponent },
    { path: 'add-accessories', component: AddAccessoriesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
