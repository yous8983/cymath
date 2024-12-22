import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.page.html',
  styleUrls: ['./list-cours.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class ListCoursPage {
  coursList = [
    {
      id: 1,
      titre: 'Algèbre',
      chapitres: [
        { id: 101, titre: 'Arithmétique' },
        { id: 102, titre: 'Nombres complexes' },
        { id: 103, titre: 'Matrices et systèmes linéaires' },
        // { id: 104, titre: 'Matrices et systèmes linéaires' },
        // { id: 105, titre: 'Matrices et systèmes linéaires' },
        // { id: 106, titre: 'Matrices et systèmes linéaires' },

      ],
    },
    {
      id: 2,
      titre: 'Analyses',
      chapitres: [
        { id: 201, titre: 'Intégration' },
        { id: 202, titre: 'Fonctions logarithmes' },
        { id: 203, titre: 'Fonctions exponentielles' },
        { id: 204, titre: 'Equations différentielles' },
      ],
    },
    {
      id: 3,
      titre: 'Géométrie',
      chapitres: [
        { id: 301, titre: 'Angles orientés' },
        { id: 302, titre: 'Barycentre et produit scalaire' },
        { id: 303, titre: 'Configuration dans l’espace' },
        { id: 304, titre: 'Transformations du plan' },
      ],
    },
    {
      id: 4,
      titre: 'Organisation et gestion de données',
      chapitres: [
        { id: 401, titre: 'Probabilités et échantillonnage' },
      ],
    },
  ];

  expandedCoursId: number | null = null; // ID du cours déplié

  constructor(private router: Router) {}

  toggleChapters(coursId: number) {
    // Si le cours est déjà déplié, le refermer
    this.expandedCoursId = this.expandedCoursId === coursId ? null : coursId;
  }

  goToChapterDetail(chapitreId: number) {
    // Naviguer vers la page du chapitre
    this.router.navigate(['/chapitre', chapitreId]);
  }

  
}
