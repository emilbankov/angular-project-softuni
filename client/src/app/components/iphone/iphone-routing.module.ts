import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iPhoneCatalogComponent } from './iphone-catalog/iphone-catalog.component';
import { iPhoneDetailsComponent } from './iphone-details/iphone-details.component';
import { iPhoneAttachAccessoryComponent } from './iphone-attach-accessory/iphone-attach-accessory.component';
import { iPhoneEditComponent } from './iphone-edit/iphone-edit.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
    {
        path: 'iphone-catalog',
        children: [
            { path: '', pathMatch: 'full', component: iPhoneCatalogComponent },
            { path: 'iphone-details/:iphoneId', component: iPhoneDetailsComponent },
            { path: 'iphone-attach-accessory/:iphoneId', component: iPhoneAttachAccessoryComponent, canActivate: [AuthActivate] },
            { path: 'iphone-edit/:iphoneId', component: iPhoneEditComponent, canActivate: [AuthActivate] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class iPhoneRoutingModule { }
