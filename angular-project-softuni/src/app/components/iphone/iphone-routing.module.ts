import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iPhoneCatalogComponent } from './iphone-catalog/iphone-catalog.component';
import { iPhoneDetailsComponent } from './iphone-details/iphone-details.component';
import { iPhoneAttachAccessoryComponent } from './iphone-attach-accessory/iphone-attach-accessory.component';
import { iPhoneEditComponent } from './iphone-edit/iphone-edit.component';

const routes: Routes = [
    {
        path: 'iphone-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iPhoneCatalogComponent },
            { path: 'iphone-details', component: iPhoneDetailsComponent },
            { path: 'iphone-attach-accessory', component: iPhoneAttachAccessoryComponent },
            { path: 'iphone-edit', component: iPhoneEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iPhoneRoutingModule { }
