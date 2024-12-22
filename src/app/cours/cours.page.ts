import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Import IonicModule ici
})
export class CoursPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
