import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapitreDetailPageRoutingModule } from './chapitre-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapitreDetailPageRoutingModule
  ],
})
export class ChapitreDetailPageModule {}
