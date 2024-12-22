import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrigeDetailPageRoutingModule } from './corrige-detail-routing.module';

import { CorrigeDetailPage } from './corrige-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrigeDetailPageRoutingModule
  ],
  declarations: [CorrigeDetailPage]
})
export class CorrigeDetailPageModule {}
