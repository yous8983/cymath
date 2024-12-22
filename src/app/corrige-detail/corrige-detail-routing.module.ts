import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrigeDetailPage } from './corrige-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CorrigeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrigeDetailPageRoutingModule {}
