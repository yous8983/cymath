import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-corriges',
  templateUrl: './corriges.page.html',
  styleUrls: ['./corriges.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class CorrigesPage {
  corrigesList = ['Corrigé 1', 'Corrigé 2', 'Corrigé 3'];
}