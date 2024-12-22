import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.page.html',
  styleUrls: ['./exercice-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ExerciceDetailPage implements OnInit {
  exerciceId!: number;
  exerciceTitle!: string;

  exerciceDetails = {
    1: 'Détails sur Exercice 1 - Algèbre',
    2: 'Détails sur Exercice 2 - Analyses',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.exerciceId = Number(this.route.snapshot.paramMap.get('id'));
    // Conversion de l'ID en string pour l'accès à l'objet
    this.exerciceTitle =
      this.exerciceDetails[
        this.exerciceId as keyof typeof this.exerciceDetails
      ] || 'Exercice inconnu';
  }
}
