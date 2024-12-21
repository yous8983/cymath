import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnoncesPageRoutingModule } from './enonces-routing.module';

import { EnoncesPage } from './enonces.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnoncesPageRoutingModule,
    RouterModule.forChild([{ path: '', component: EnoncesPage }]),

  ],
  
})
export class EnoncesPageModule {}
