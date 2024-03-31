import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iMacCatalogComponent } from './imac-catalog/imac-catalog.component';
import { iMacDetailsComponent } from './imac-details/imac-details.component';
import { iMacAttachAccessoryComponent } from './imac-attach-accessory/imac-attach-accessory.component';
import { iMacEditComponent } from './imac-edit/imac-edit.component';

const routes: Routes = [
    {
        path: 'imac-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iMacCatalogComponent },
            { path: 'imac-details', component: iMacDetailsComponent },
            { path: 'imac-attach-accessory', component: iMacAttachAccessoryComponent },
            { path: 'imac-edit', component: iMacEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iMacRoutingModule { }
