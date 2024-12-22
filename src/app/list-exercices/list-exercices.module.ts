import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExercicesPageRoutingModule } from './list-exercices-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExercicesPageRoutingModule
  ],

})
export class ListExercicesPageModule {}
