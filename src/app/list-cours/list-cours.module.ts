import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursPageRoutingModule } from './list-cours-routing.module';

import { ListCoursPage } from './list-cours.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursPageRoutingModule,
    RouterModule.forChild([{ path: '', component: ListCoursPage }]),
  ],

})
export class ListCoursPageModule {}
