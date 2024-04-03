import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iMacCatalogComponent } from './imac-catalog/imac-catalog.component';
import { iMacDetailsComponent } from './imac-details/imac-details.component';
import { iMacEditComponent } from './imac-edit/imac-edit.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
    {
        path: 'imac-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iMacCatalogComponent },
            { path: 'imac-details/:imacId', component: iMacDetailsComponent },
            { path: 'imac-edit/:imacId', component: iMacEditComponent, canActivate: [AuthActivate] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iMacRoutingModule { }
