import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chapitre-detail',
  templateUrl: './chapitre-detail.page.html',
  styleUrls: ['./chapitre-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]  // 
})
export class ChapitreDetailPage implements OnInit {
  chapitreId!: number;
  chapitreTitle!: string;

  // Déclaration du type explicite des clés comme étant des nombres
  chapitreDetails: { [key: number]: string } = {
    101: 'Détails sur Arithmétique',
    102: 'Détails sur les Nombres Complexes',
    103: 'Détails sur les Matrices et systèmes linéaires',
    201: 'Détails sur l’Intégration',
    202: 'Détails sur les Fonctions logarithmes',
    203: 'Détails sur les Fonctions exponentielles',
    204: 'Détails sur les Équations différentielles',
    301: 'Détails sur les Angles orientés',
    302: 'Détails sur le Barycentre et produit scalaire',
    303: 'Détails sur les Configurations dans l’espace',
    304: 'Détails sur les Transformations du plan',
    401: 'Détails sur Probabilités et échantillonnage',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer l'ID du chapitre à partir de l'URL
    this.chapitreId = Number(this.route.snapshot.paramMap.get('id'));

    // Accéder à l'objet chapitreDetails avec l'ID comme clé numérique
    this.chapitreTitle = this.chapitreDetails[this.chapitreId] || 'Chapitre inconnu';
  }
}
