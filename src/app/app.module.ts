import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaseTarantinosComponent } from './case-tarantinos/case-tarantinos.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CaseTarantinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
