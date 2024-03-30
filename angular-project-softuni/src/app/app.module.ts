import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';
import { UserModule } from './components/user/user.module';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { iPhoneModule } from './components/iphone/iphone.module';
import { iMacModule } from './components/imac/imac.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ComponentsModule,
    iPhoneModule,
    iMacModule,
    UserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
