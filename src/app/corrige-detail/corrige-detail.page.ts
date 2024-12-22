import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-corrige-detail',
  templateUrl: './corrige-detail.page.html',
  styleUrls: ['./corrige-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]  // 
})
export class CorrigeDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
