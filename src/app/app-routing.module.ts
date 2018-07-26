import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseTarantinosComponent } from './case-tarantinos/case-tarantinos.component';

const routes: Routes = [
    { path: 'case-tarantinos', component: CaseTarantinosComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
