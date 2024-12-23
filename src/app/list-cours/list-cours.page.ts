import { Component } from '@angular/core';
import { CoursService } from '../services/cours.service';
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
  coursList: any[] = [];
  expandedCoursId: number | null = null;

  constructor(private router: Router, private coursService: CoursService) {}

  ngOnInit() {
    // Récupérer les cours depuis le service
    this.coursList = this.coursService.getCoursList();
  }

  toggleChapters(coursId: number) {
    this.expandedCoursId = this.expandedCoursId === coursId ? null : coursId;
  }

  goToChapterDetail(chapitreId: number) {
    this.router.navigate(['/chapitre', chapitreId]);
  }
}
