import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaseTarantinosComponent } from './case-tarantinos/case-tarantinos.component';
import { AppRoutingModule } from './app-routing.module';
import { CaseZechemodanComponent } from './case-zechemodan/case-zechemodan.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseTarantinosComponent,
    CaseZechemodanComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
