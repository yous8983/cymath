import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
   imports: [IonicModule,RouterModule,CommonModule],
})
export class HomePage {

 
  constructor(private router: Router) {}

    goToListCours(event: Event): void {
    event.stopPropagation(); // Empêche la propagation
    this.router.navigate(['/list-cours']);
  }

  goToListExercices(event: Event): void {
    event.stopPropagation(); // Empêche la propagation
    this.router.navigate(['/list-exercices']);
  }
}
