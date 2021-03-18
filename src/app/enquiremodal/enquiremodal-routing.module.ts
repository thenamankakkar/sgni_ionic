import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiremodalPage } from './enquiremodal.page';

const routes: Routes = [
  {
    path: '',
    component: EnquiremodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquiremodalPageRoutingModule {}
