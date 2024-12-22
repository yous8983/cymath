import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciceDetailPageRoutingModule } from './exercice-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciceDetailPageRoutingModule
  ],

})
export class ExerciceDetailPageModule {}
