import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FEEDPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FEEDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FEEDPageRoutingModule {}
