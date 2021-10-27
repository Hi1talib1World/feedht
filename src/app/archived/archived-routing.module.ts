import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivedPage } from './archived.page';

const routes: Routes = [
  {
    path: '',
    component: ArchivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivedPageRoutingModule {}
