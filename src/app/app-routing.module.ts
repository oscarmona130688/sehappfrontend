import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'sercat/:categoria',
    loadChildren: () => import('./sercat/sercat.module').then(m => m.SercatPageModule)
  },
  {
    path: 'seresp/:_id',
    loadChildren: () => import('./seresp/seresp.module').then(m => m.SerespPageModule)
  },
  {
    path: 'servicos-propios',
    loadChildren: () => import('./servicos-propios/servicos-propios.module').then(m => m.ServicosPropiosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
