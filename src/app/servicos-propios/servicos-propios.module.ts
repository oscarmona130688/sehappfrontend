import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosPropiosPageRoutingModule } from './servicos-propios-routing.module';

import { ServicosPropiosPage } from './servicos-propios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosPropiosPageRoutingModule
  ],
  declarations: [ServicosPropiosPage]
})
export class ServicosPropiosPageModule {}
