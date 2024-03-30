import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iMacCatalogComponent } from './imac-catalog/imac-catalog.component';
import { iMacDetailsComponent } from './imac-details/imac-details.component';
import { iPhoneAttachAccessoryComponent } from '../iphone/iphone-attach-accessory/iphone-attach-accessory.component';
import { iPhoneEditComponent } from '../iphone/iphone-edit/iphone-edit.component';

const routes: Routes = [
    {
        path: 'imac-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iMacCatalogComponent },
            { path: 'imac-details', component: iMacDetailsComponent },
            { path: 'imac-attach-accessory', component: iPhoneAttachAccessoryComponent },
            { path: 'imac-edit', component: iPhoneEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iMacRoutingModule { }
