import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SercatPageRoutingModule } from './sercat-routing.module';

import { SercatPage } from './sercat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SercatPageRoutingModule
  ],
  declarations: [SercatPage]
})
export class SercatPageModule {}
