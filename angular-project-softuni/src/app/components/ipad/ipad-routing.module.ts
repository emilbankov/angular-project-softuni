import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iPadCatalogComponent } from './ipad-catalog/ipad-catalog.component';
import { iPadDetailsComponent } from './ipad-details/ipad-details.component';
import { iPadAttachAccessoryComponent } from './ipad-attach-accessory/ipad-attach-accessory.component';
import { iPadEditComponent } from './ipad-edit/ipad-edit.component';

const routes: Routes = [
    {
        path: 'ipad-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iPadCatalogComponent },
            { path: 'ipad-details', component: iPadDetailsComponent },
            { path: 'ipad-attach-accessory', component: iPadAttachAccessoryComponent },
            { path: 'ipad-edit', component: iPadEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iPadRoutingModule { }
