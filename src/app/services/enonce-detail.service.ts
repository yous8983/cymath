import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnonceDetailService {
  private enonceDetails: {
    [key: number]: { title: string; fileUrl?: string; imageUrl?: string };
  } = {
    101: {
      title: 'Arithmétique',
      fileUrl: 'assets/files/enonce_arithmetique.txt',
      //imageUrl: 'assets/images/enonce_arithmetique.gif',
    },
    102: {
      title: 'Nombres Complexes',
      fileUrl: 'assets/files/enonce_nombres_complexes.pdf',
      imageUrl: 'assets/images/enonce_nombres_complexes.gif',
    },
    103: {
      title: 'Matrices et systèmes linéaires',
      fileUrl: 'assets/files/enonce_matrices.pdf',
      imageUrl: 'assets/images/enonce_matrices.gif',
    },
    201: {
      title: 'Intégration',
      imageUrl: 'assets/images/enonce_integration.png',
      fileUrl: 'assets/files/enonce_intégration.pdf',
    },
    202: {
      title: 'Fonctions logarithmes',
      fileUrl: 'assets/files/enonce_logarithmes.pdf',
      imageUrl: 'assets/images/enonce_logarithmes.png',
    },
    203: {
      title: 'Fonctions exponentielles',
      fileUrl: 'assets/files/enonce_exponentielle.pdf',
      imageUrl: 'assets/images/enonce_exponentielle.png',
    },
    204: {
      title: 'Équations différentielles',
      fileUrl: 'assets/files/enonce_equa_diff.pdf',
      imageUrl: 'assets/images/enonce_equa_diff.png',
    },
    301: {
      title: 'Angles orientés',
      fileUrl: 'assets/files/enonce_angles_oriente.pdf',
      imageUrl: 'assets/images/enonce_angles_oriente.png',
    },
    302: {
      title: 'Barycentre et produit scalaire',
      fileUrl: 'assets/files/enonce_barycentre_prod_scalaire.pdf',
      imageUrl: 'assets/images/enonce_barycentre_prod_scalaire.png',
    },
    303: {
      title: 'Configurations dans l’espace',
      fileUrl: 'assets/files/enonce_config_espace.pdf',
      imageUrl: 'assets/images/enonce_config_espace.png',
    },
    304: {
      title: 'Transformations du plan',
      fileUrl: 'assets/files/enonce_transform_plan.pdf',
      imageUrl: 'assets/images/enonce_transform_plan.png',
    },
    401: {
      title: 'Probabilités et échantillonnage',
      fileUrl: 'assets/files/enonce_probabilité_échantillonage.pdf',
      imageUrl: 'assets/images/enonce_probabilité_échantilonnage.png',
    },
  };

  constructor() {}

  getEnonceDetail(id: number) {
    const enonce = this.enonceDetails[id];
    if (enonce) {
      return enonce;
    }
    return { title: 'Enonce inconnu' };
  }

  // Nouvelle méthode pour vérifier si un fichier peut être affiché
  getEnonceFileContent(id: number): string | null {
    const enonce = this.enonceDetails[id];
    return enonce?.fileUrl || null;
  }
}
