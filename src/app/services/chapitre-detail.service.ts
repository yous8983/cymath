import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChapitreDetailService {
  private chapitreDetails: {
    [key: number]: { title: string; fileUrl?: string; imageUrl?: string };
  } = {
    101: {
      title: 'Arithmétique',
       fileUrl: 'assets/files/arithmetique.pdf',
       imageUrl: 'assets/images/arithmetique.gif',
    },
    102: {
      title: 'Nombres Complexes',
      fileUrl: 'assets/files/nombres-complexes.pdf',
      imageUrl: 'assets/images/nombres-complexes.gif',
    },
    103: {
      title: 'Matrices et systèmes linéaires',
      fileUrl: 'assets/files/matrices.pdf',
      imageUrl: 'assets/images/matrices.gif',
    },
    201: {
      title: 'Intégration',
      imageUrl: 'assets/images/integration.png',
      fileUrl: 'assets/files/intégration.pdf',
    },
    202: {
      title: 'Fonctions logarithmes',
      fileUrl: 'assets/files/logarithmes.pdf',
      imageUrl: 'assets/images/logarithmes.png',
    },
    203: {
      title: 'Fonctions exponentielles',
      fileUrl: 'assets/files/exponentielle.pdf',
      imageUrl: 'assets/images/exponentielle.png',
    },
    204: {
      title: 'Équations différentielles',
      fileUrl: 'assets/files/equa_diff.pdf',
      imageUrl: 'assets/images/equa_diff.png',
    },
    301: {
      title: 'Angles orientés',
      fileUrl: 'assets/files/angles_oriente.pdf',
      imageUrl: 'assets/images/angles_oriente.png',
    },
    302: {
      title: 'Barycentre et produit scalaire',
      fileUrl: 'assets/files/barycentre_prod_scalaire.pdf',
      imageUrl: 'assets/images/barycentre_prod_scalaire.png',
    },
    303: {
      title: 'Configurations dans l’espace',
      fileUrl: 'assets/files/config_espace.pdf',
      imageUrl: 'assets/images/config_espace.png',
    },
    304: {
      title: 'Transformations du plan',
      fileUrl: 'assets/files/transform_plan.pdf',
      imageUrl: 'assets/images/transform_plan.png',
    },
    401: {
      title: 'Probabilités et échantillonnage',
      fileUrl: 'assets/files/probabilité_échantillonage.pdf',
      imageUrl: 'assets/images/probabilité_échantilonnage.png',
    },
  };

  constructor() {}

  getChapitreDetail(id: number) {
    const chapitre = this.chapitreDetails[id];
    if (chapitre) {
      return chapitre;
    }
    return { title: 'Chapitre inconnu' };
  }

  // Nouvelle méthode pour vérifier si un fichier peut être affiché
  getChapitreFileContent(id: number): string | null {
    const chapitre = this.chapitreDetails[id];
    return chapitre?.fileUrl || null;
  }
}
