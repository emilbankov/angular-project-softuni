import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iPadCatalogComponent } from './ipad-catalog/ipad-catalog.component';
import { iPadDetailsComponent } from './ipad-details/ipad-details.component';
import { iPadEditComponent } from './ipad-edit/ipad-edit.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
    {
        path: 'ipad-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iPadCatalogComponent },
            { path: 'ipad-details/:ipadId', component: iPadDetailsComponent },
            { path: 'ipad-edit/:ipadId', component: iPadEditComponent, canActivate: [AuthActivate] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iPadRoutingModule { }
