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

  goToListCours() {
    this.router.navigate(['/list-cours']); // Navigue vers la page de la liste des cours
  }
}
