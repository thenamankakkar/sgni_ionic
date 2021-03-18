import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiremodalPageRoutingModule } from './enquiremodal-routing.module';

import { EnquiremodalPage } from './enquiremodal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EnquiremodalPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EnquiremodalPage]
})
export class EnquiremodalPageModule {}
