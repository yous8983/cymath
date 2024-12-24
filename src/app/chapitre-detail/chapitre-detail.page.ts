import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChapitreDetailService } from '../services/chapitre-detail.service'; // Mettez à jour le chemin selon votre projet

@Component({
  selector: 'app-chapitre-detail',
  templateUrl: './chapitre-detail.page.html',
  styleUrls: ['./chapitre-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ChapitreDetailPage implements OnInit {
  chapitreId!: number;
  chapitreTitle!: string;
  fileUrl: string | null = null;
  imageUrl: string | null = null;
  sanitizedFileUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private chapitreDetailService: ChapitreDetailService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.chapitreId = Number(this.route.snapshot.paramMap.get('id'));
    const chapitreDetail = this.chapitreDetailService.getChapitreDetail(
      this.chapitreId
    );

    this.chapitreTitle = chapitreDetail.title;
    this.fileUrl = chapitreDetail.fileUrl || null;
    this.imageUrl = chapitreDetail.imageUrl || null;
  
        // Sanitize the file URL
    if (this.fileUrl) {
      this.sanitizedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl);
    }

  }
}
