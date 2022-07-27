import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SercatPage } from './sercat.page';

const routes: Routes = [
  {
    path: '',
    component: SercatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SercatPageRoutingModule {}
