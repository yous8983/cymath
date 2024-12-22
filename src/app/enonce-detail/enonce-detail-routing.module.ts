import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnonceDetailPage } from './enonce-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EnonceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnonceDetailPageRoutingModule {}
