import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapitre-list',
  templateUrl: './chapitre-list.component.html',
  styleUrls: ['./chapitre-list.component.scss'],
  imports:[
    IonicModule,CommonModule
  ]
})
export class ChapitreListComponent {
  @Input() chapitres: any[] = []; // Liste des chapitres reçue du parent
  @Input() viewMode: string = 'enonce'; // Mode actuel (Enoncé / Corrigé)
  @Input() selectedChapitreId: number | null = null; // Chapitre sélectionné
  @Output() chapitreClick = new EventEmitter<number>(); // Événement de clic pour redirection

  onChapitreClick(chapitreId: number) {
    this.chapitreClick.emit(chapitreId); // Émettre l'événement avec l'ID du chapitre
  }

    getClasses() {
    return {
      'enonce-mode': this.viewMode === 'enonce',
      'corrige-mode': this.viewMode === 'corrige'
    };
  }
}
