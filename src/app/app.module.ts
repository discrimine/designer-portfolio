import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaseTarantinosComponent } from './case-tarantinos/case-tarantinos.component';
import { AppRoutingModule } from './app-routing.module';
import { CaseZechemodanComponent } from './case-zechemodan/case-zechemodan.component';
import { WorksComponent } from './works/works.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    CaseTarantinosComponent,
    CaseZechemodanComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
