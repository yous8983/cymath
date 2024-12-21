import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnoncesPage } from './enonces.page';

const routes: Routes = [
  {
    path: '',
    component: EnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnoncesPageRoutingModule {}
