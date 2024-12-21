import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-enonces',
  templateUrl: './enonces.page.html',
  styleUrls: ['./enonces.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class EnoncesPage {
  enoncesList = ['Exercice 1 : Calcul intégral', 'Exercice 2 : Probabilités', 'Exercice 3 : Électrostatique'];
}
