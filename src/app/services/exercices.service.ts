import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExercicesService {
  private exercicesList = [
    {
      id: 1,
      titre: 'Exercices | - Algèbre',
      chapitres: [
        { id: 101, titre: 'Arithmétique' },
        { id: 102, titre: 'Nombres complexes' },
        { id: 103, titre: 'Matrices et systèmes linéaires' },
      ],
    },
    {
      id: 2,
      titre: 'Exercices | - Analyses',
      chapitres: [
        { id: 201, titre: 'Intégration' },
        { id: 202, titre: 'Fonctions logarithmes' },
        { id: 203, titre: 'Fonctions exponentielles' },
        { id: 204, titre: 'Equations différentielles' },
      ],
    },
    {
      id: 3,
      titre: 'Exercices | - Géométrie',
      chapitres: [
        { id: 301, titre: 'Angles orientés' },
        { id: 302, titre: 'Barycentre et produit scalaire' },
        { id: 303, titre: 'Configuration dans l’espace' },
        { id: 304, titre: 'Transformations du plan' },
      ],
    },
    {
      id: 4,
      titre: 'Exercices | - Organisation et gestion de données',
      chapitres: [{ id: 401, titre: 'Probabilités et échantillonnage' }],
    },
  ];

  getExercices() {
    return this.exercicesList;
  }
}
