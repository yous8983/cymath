import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrigeDetailService {

  private corrigeDetails: {
    [key: number]: { title: string; fileUrl?: string; imageUrl?: string };
  } = {
    101: {
      title: 'Arithmétique',
      fileUrl: 'assets/files/corrige_arithmetique.txt',
      //imageUrl: 'assets/images/corrige_arithmetique.gif',
    },
    102: {
      title: 'Nombres Complexes',
      fileUrl: 'assets/files/corrige_nombres_complexes.pdf',
      imageUrl: 'assets/images/corrige_nombres_complexes.gif',
    },
    103: {
      title: 'Matrices et systèmes linéaires',
      fileUrl: 'assets/files/corrige_matrices.pdf',
      imageUrl: 'assets/images/corrige_matrices.gif',
    },
    201: {
      title: 'Intégration',
      imageUrl: 'assets/images/corrige_integration.png',
      fileUrl: 'assets/files/corrige_intégration.pdf',
    },
    202: {
      title: 'Fonctions logarithmes',
      fileUrl: 'assets/files/corrige_logarithmes.pdf',
      imageUrl: 'assets/images/corrige_logarithmes.png',
    },
    203: {
      title: 'Fonctions exponentielles',
      fileUrl: 'assets/files/corrige_exponentielle.pdf',
      imageUrl: 'assets/images/corrige_exponentielle.png',
    },
    204: {
      title: 'Équations différentielles',
      fileUrl: 'assets/files/corrige_equa_diff.pdf',
      imageUrl: 'assets/images/corrige_equa_diff.png',
    },
    301: {
      title: 'Angles orientés',
      fileUrl: 'assets/files/corrige_angles_oriente.pdf',
      imageUrl: 'assets/images/corrige_angles_oriente.png',
    },
    302: {
      title: 'Barycentre et produit scalaire',
      fileUrl: 'assets/files/corrige_barycentre_prod_scalaire.pdf',
      imageUrl: 'assets/images/corrige_barycentre_prod_scalaire.png',
    },
    303: {
      title: 'Configurations dans l’espace',
      fileUrl: 'assets/files/corrige_config_espace.pdf',
      imageUrl: 'assets/images/corrige_config_espace.png',
    },
    304: {
      title: 'Transformations du plan',
      fileUrl: 'assets/files/corrige_transform_plan.pdf',
      imageUrl: 'assets/images/corrige_transform_plan.png',
    },
    401: {
      title: 'Probabilités et échantillonnage',
      fileUrl: 'assets/files/corrige_probabilité_échantillonage.pdf',
      imageUrl: 'assets/images/corrige_probabilité_échantilonnage.png',
    },
  };

  constructor() {}

  getCorrigeDetail(id: number) {
    const corrige = this.corrigeDetails[id];
    if (corrige) {
      return corrige;
    }
    return { title: 'Corrige inconnu' };
  }

  // Nouvelle méthode pour vérifier si un fichier peut être affiché
  getCorrigeFileContent(id: number): string | null {
    const corrige = this.corrigeDetails[id];
    return corrige?.fileUrl || null;
  }
}
