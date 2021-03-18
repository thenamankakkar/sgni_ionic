import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowmorePageRoutingModule } from './knowmore-routing.module';

import { KnowmorePage } from './knowmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowmorePageRoutingModule
  ],
  declarations: [KnowmorePage]
})
export class KnowmorePageModule {}
