import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {
  private exercicesList = [
    {
      id: 1,
      titre: 'Exercice 1 - Algèbre',
      chapitres: [
        { id: 101, titre: 'Exercice sur les matrices' },
        { id: 102, titre: 'Exercice sur les équations' },
      ],
    },
    {
      id: 2,
      titre: 'Exercice 2 - Analyses',
      chapitres: [
        { id: 201, titre: "Exercice sur l'intégration" },
        { id: 202, titre: 'Exercice sur les fonctions exponentielles' },
      ],
    },
  ];

  getExercices() {
    return this.exercicesList;
  }
}
