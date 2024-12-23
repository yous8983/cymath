import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router'; // Importation de Router
import { FormsModule } from '@angular/forms'; // Importation de FormsModule pour ngModel
import { ExercicesService } from '../services/exercices.service'; // Import du service
import { ChapitreListComponent } from '../chapitre-list/chapitre-list.component';
@Component({
  selector: 'app-list-exercices',
  templateUrl: './list-exercices.page.html',
  styleUrls: ['./list-exercices.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ChapitreListComponent,
  ], // Importation des modules nécessaires
})
export class ListExercicesPage {
  exercicesList = [
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

  expandedExerciceId: number | null = null; // ID de l'exercice déplié
  viewMode: string = 'enonce'; // Par défaut, mode "Enoncé"
  selectedChapitreId: number | null = null; // Chapitre sélectionné


  constructor(
    private router: Router,
    private exercicesService: ExercicesService
  ) {}

  ngOnInit() {
    this.exercicesList = this.exercicesService.getExercices(); // Récupération des exercices
  }

  toggleExercices(exerciceId: number, chapitres: any[]) {
    // Si l'exercice est déplié, on le replie, sinon on le déplie
    if (this.expandedExerciceId === exerciceId) {
      this.expandedExerciceId = null;
      this.selectedChapitreId = null; // Réinitialiser la sélection
    } else {
      this.expandedExerciceId = exerciceId;
      this.selectedChapitreId = chapitres.length > 0 ? chapitres[0].id : null; // Sélectionner le premier chapitre
    }
  }

  goToExerciceDetail(chapitreId: number) {
    this.router.navigate(['/exercice', chapitreId]); // Redirection vers la page des détails de l'exercice
  }

  goToEnoncePage(exerciceId: number) {
    this.router.navigate(['/enonces', exerciceId]); // Redirection vers la page de l'énoncé
  }

  goToCorrigePage(exerciceId: number) {
    this.router.navigate(['/corriges', exerciceId]); // Redirection vers la page du corrigé
  }
  
  getClasses() {
    return {
      'enonce-mode': this.viewMode === 'enonce',
      'corrige-mode': this.viewMode === 'corrige'
    };
  }

  
}
