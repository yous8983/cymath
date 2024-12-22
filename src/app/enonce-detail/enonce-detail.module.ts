import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnonceDetailPageRoutingModule } from './enonce-detail-routing.module';

import { EnonceDetailPage } from './enonce-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnonceDetailPageRoutingModule
  ],
  declarations: [EnonceDetailPage]
})
export class EnonceDetailPageModule {}
