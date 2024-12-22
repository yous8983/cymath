import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-enonce-detail',
  templateUrl: './enonce-detail.page.html',
  styleUrls: ['./enonce-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Ajoutez IonicModule ici
})
export class EnonceDetailPage {}
