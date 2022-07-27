import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerespPageRoutingModule } from './seresp-routing.module';

import { SerespPage } from './seresp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerespPageRoutingModule
  ],
  declarations: [SerespPage]
})
export class SerespPageModule {}
