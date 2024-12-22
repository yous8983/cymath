import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapitreDetailPage } from './chapitre-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChapitreDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapitreDetailPageRoutingModule {}
