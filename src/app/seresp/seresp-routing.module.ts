import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerespPage } from './seresp.page';

const routes: Routes = [
  {
    path: '',
    component: SerespPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerespPageRoutingModule {}
