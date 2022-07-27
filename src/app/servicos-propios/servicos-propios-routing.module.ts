import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPropiosPage } from './servicos-propios.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosPropiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPropiosPageRoutingModule {}
