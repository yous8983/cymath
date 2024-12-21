import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrigesPage } from './corriges.page';

const routes: Routes = [
  {
    path: '',
    component: CorrigesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrigesPageRoutingModule {}
