import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
    imports: [
    IonicModule,   // Importation des composants Ionic
    CommonModule,  // Modules Angular de base
    FormsModule    // Si vous avez des formulaires
  ]
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 100000); // Redirection après 3 secondes
  }
}
