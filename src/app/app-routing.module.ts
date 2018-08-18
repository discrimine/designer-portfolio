import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseTarantinosComponent } from './case-tarantinos/case-tarantinos.component';
import { CaseZechemodanComponent } from './case-zechemodan/case-zechemodan.component'
import { WorksComponent } from './works/works.component';

const routes: Routes = [
    { path: 'case-tarantinos', component: CaseTarantinosComponent },
    { path: 'case-zechemodan', component: CaseZechemodanComponent },
    { path: 'works', component: WorksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
