import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CorrigeDetailService } from '../services/corrige-detail.service'; // Mettez à jour le chemin selon votre projet
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-corrige-detail',
  templateUrl: './corrige-detail.page.html',
  styleUrls: ['./corrige-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, HttpClientModule],
})
export class CorrigeDetailPage implements OnInit {
  corrigeId!: number;
  corrigeTitle!: string;
  fileUrl: string | null = null;
  imageUrl: string | null = null;
  sanitizedFileUrl: SafeResourceUrl | null = null;
  textContent: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private corrigeDetailService: CorrigeDetailService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.corrigeId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.corrigeId) {
      console.error('Invalid Corrige ID');
      return;
    }
    const corrigeDetail = this.corrigeDetailService.getCorrigeDetail(
      this.corrigeId
    );

    this.corrigeTitle = corrigeDetail.title;
    this.fileUrl = corrigeDetail.fileUrl || null;
    this.imageUrl = corrigeDetail.imageUrl || null;

    // Sanitize the file URL
    if (this.fileUrl) {
      this.sanitizedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.fileUrl
      );

      const extension = this.fileUrl.split('.').pop()?.toLowerCase();
      if (extension === 'txt') {
        this.loadTextFile();
      }
    }
  }

  checkFile(): number {
    if (!this.fileUrl) {
      return 3; // Vue 3 : Aucun contenu
    }

    const extension = this.fileUrl.split('.').pop()?.toLowerCase();
    if (extension === 'pdf') {
      return 1; // Vue 1 : Visualiseur PDF
    } else if (extension === 'txt') {
      return 2; // Vue 2 : Fichier texte
    }
    return 3; // Vue 3 : Extension inconnue ou aucun fichier
  }

  loadTextFile() {
    if (this.fileUrl) {
      this.http.get(this.fileUrl, { responseType: 'text' }).subscribe(
        (content) => {
          this.textContent = content;
        },
        (error) => {
          console.error('Erreur lors du chargement du fichier texte :', error);
          this.textContent = 'Impossible de charger le fichier texte.';
        }
      );
    }
  }
}
