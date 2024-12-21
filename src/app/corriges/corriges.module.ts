import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrigesPageRoutingModule } from './corriges-routing.module';

import { CorrigesPage } from './corriges.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrigesPageRoutingModule,
    RouterModule.forChild([{ path: '', component: CorrigesPage }]),
  ],
})
export class CorrigesPageModule {}
