import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.page.html',
  styleUrls: ['./list-cours.page.scss'],
   imports: [IonicModule,RouterModule,CommonModule],
})
export class ListCoursPage {
  coursList = [
    'Mathématiques',
    'Physique-Chimie',
    'Biologie',
    'Histoire-Géographie',
  ];
}
