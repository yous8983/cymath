


export interface Description {
  id: number;
  titre: string;
  disponible: boolean;
}


export interface Chapitre {
  id: number;
  titre: string;
  descriptions: Description[];

}


export interface Cours {
  id: number;
  domaine: string;
  chapitres: Chapitre[];
}

export const coursList: Cours[] = [
  {
    id: 1,
    domaine: 'Algèbre',
    chapitres: [
      {
        id: 1,
        titre: 'Arithmétique',
        descriptions: [
          { id: 1, titre: 'Divisibilité', disponible: true },
            { id: 2, titre: 'Diviseurs d’un entier naturel', disponible: false},
            { id: 3, titre: 'Critères de divisibilité', disponible: true},
            { id: 4, titre: 'Nombres premiers', disponible: true},
            { id: 5, titre: 'Décomposition en facteurs premiers', disponible: false},
            { id: 6, titre: 'PGCD de deux entiers naturels', disponible: true},
            { id: 7, titre: 'PPCM de deux entiers naturels', disponible: true},
            { id: 8, titre: 'Nombres premiers entre eux', disponible: true},
            { id: 9, titre: 'Algorithme d\'Euclide', disponible: true},
            { id: 10, titre: 'Systèmes de numération', disponible: false},
            { id: 11, titre: 'Division euclidienne', disponible: true},
            { id: 12, titre: 'Congruence', disponible: false},
            { id: 13, titre: 'Identité de Bézout', disponible: true},
            { id: 14, titre: 'Théorème de Gauss', disponible: true},
            { id: 15, titre: 'Petit Théorème de Fermat', disponible: false},
            { id: 16, titre: 'Equations dans Z', disponible: false},
          // Autres descriptions...
        ],
      },
      {
        id: 2,
        titre: 'Nombres complexes',
        descriptions: [
         { id: 1, titre:'Introduction de C',disponible: true },
         { id: 2, titre:'Définition et forme algébrique',disponible: true },
         { id: 3, titre:'Partie réelle d’un complexe',disponible: true },
         { id: 4, titre:'Partie imaginaire d’un complexe',disponible: true },
         { id: 5, titre:'Complexe imaginaire pur',disponible: false },
         { id: 6, titre:'Somme de deux complexes',disponible: false },
         { id: 7, titre:'Soustraction de deux complexes',disponible: true },
         { id: 8, titre:'Produit de deux complexes',disponible: false },
         { id: 9, titre:'Inverse d’un complexe',disponible: true },
         { id: 10, titre:'Rapport de deux complexes',disponible: false },
         { id: 11, titre:'Puissance entière d’un complexe',disponible: false },
         { id: 12, titre:'Représentation géométrique d’un nombre complexe',disponible: true },
         { id: 13, titre:'Affixe d’un point et d’un vecteur',disponible: false },
         { id: 14, titre:'Conjugué d’un complexe',disponible: false },
         { id: 15, titre:'Propriétés du conjugué d’un complexe',disponible: true },
         { id: 16, titre:'Module d’un complexe',disponible: true },
         { id: 17, titre:'Argument d’un complexe non nul.',disponible: true },
         { id: 18, titre:'Forme trigonométrique d’un complexe non nul',disponible: false },
         { id: 19, titre:'Forme exponentielle d’un complexe non nul',disponible: false },
         { id: 20, titre:'Passage d’une forme à l’autre',disponible: false },
         { id: 21, titre:'Formules d’Euler',disponible: true },
         { id: 22, titre:'Formule de Moivre',disponible: true },
         { id: 23, titre:'Linéarisation d’un polynôme trigonométrique',disponible: false },
         { id: 24, titre:'Equations du premier degré dans',disponible: false },
         { id: 25, titre:'Equation du second degré à coefficients réels',disponible: true },
         { id: 26, titre:'Equation du second degré à coefficients complexes',disponible: true },
         { id: 27, titre:'Equation du troisième degré',disponible: false },
         { id: 28, titre:'Racines carrées d’un complexe',disponible: false },
         { id: 29, titre:'Racines nièmes de l’unité',disponible: true },
         { id: 30, titre:'Racines nièmes d’un complexe',disponible: false },
         { id: 31, titre:'Expression complexe d’une translation',disponible: false },
         { id: 32, titre:'Expression complexe d’une homothétie',disponible: false },
         { id: 33, titre:'Expression complexe d’une rotation',disponible: true },
         { id: 34, titre:'Expression complexe d’une similitude directe',disponible: true },
         { id: 35, titre:'Applications géométriques des complexes',disponible: true },
        ],
      },
      {
        id: 3,
        titre: 'Matrices et systèmes linéaires',
        descriptions: [
             { id: 1, titre: 'Notion de Matrices',disponible: true },
             { id: 2, titre: 'Vocabulaire lié aux matrices',disponible: true },
             { id: 3, titre: 'Opérations sur les matrices',disponible: false },
             { id: 4, titre: 'Inverse d’une matrice carrée d’ordre 2.',disponible: true },
             { id: 5, titre: 'Matrices particulières',disponible: false },
             { id: 6, titre: 'Déterminant d’une matrice carrée d’ordre 2.',disponible: false },
             { id: 7, titre: 'Déterminant d’une matrice carrée d’ordre 3.',disponible: false },
             { id: 8, titre: 'Notion de Système linéaire à n équations et p inconnues.',disponible: true },
             { id: 9, titre: 'Ecriture matricielle d’un système linéaire.',disponible: false },
             { id: 10, titre: 'Méthode du pivot de Gauss pour la résolution d’un système linéaire',disponible: true },
             { id: 11, titre: 'Triangularisation d’un système linéaire',disponible: true },
        ]
      },
    ],
  },
//   // Autres cours...
   {
    id: 2,
    domaine: 'Analyse',
    chapitres: [
    {
        id: 1,
        titre: 'Intégration',
        descriptions: [
          { id: 1, titre: 'Primitives d’une fonction continue', disponible: true },
            { id: 2, titre: 'Intégrale d’une fonction continue', disponible: false},
            { id: 3, titre: 'Calcul d’aire', disponible: true},
            { id: 4, titre: 'Fonctions définies par intégrale', disponible: true},
            { id: 5, titre: 'Suites définies par intégrale', disponible: false},
        ],
    },
    {
        id: 2,
        titre: 'Fonctions logarithmes',
        descriptions: [
         { id: 1, titre:'Fonction logarithme népérien (notée ln)',disponible: true },
         { id: 2, titre:'Etude de la fonction logarithme de base a :loga',disponible: true },
         { id: 3, titre:'Etude de la fonction logarithme de base 10 (log)',disponible: true },
         { id: 4, titre:'Changement de base',disponible: true },
        
        ],
    },
    {
        id: 3,
        titre: 'Fonctions exponentielles',
        descriptions: [
             { id: 1, titre: 'Fonction exponentielle de basee notée exp',disponible: true },
             { id: 2, titre: 'Etude de la fonction exponentielle de base a',disponible: true },
             { id: 3, titre: 'Etude de la fonction exponentielle de base 10',disponible: false },
             { id: 4, titre: 'Définition et étude de la fonction puissance',disponible: true },
             { id: 5, titre: 'Croissances comparées',disponible: false },
        
        ]
    },
    {
        id: 4,
        titre: 'Equations différentielles',
        descriptions: [
             { id: 1, titre: 'Equations homogènes du premier ordre',disponible: true },
             { id: 2, titre: 'Equations homogènes du second ordre',disponible: true },
             { id: 3, titre: 'Equations du premier ordre avec second membre',disponible: false },
             { id: 4, titre: 'Equations du second ordre avec second membre',disponible: true },
             { id: 5, titre: 'Exemples de modélisations',disponible: false },
        
        ]
    },
    ],
  },
 {
    id: 3,
    domaine: 'Géométrie',
    chapitres: [
    {
        id: 1,
        titre: 'Angles orientés',
        descriptions: [
          { id: 1, titre: 'Orientation du plan', disponible: true },
            { id: 2, titre: 'Cercle trigonométrique', disponible: false},
            { id: 3, titre: 'Angles orientés de vecteurs', disponible: true},
            { id: 4, titre: 'Mesure principale d’un angle orienté', disponible: true},
            { id: 5, titre: 'Angles orientés de droites', disponible: false},
            { id: 6, titre: 'Théorème de la tangente', disponible: true},
            { id: 7, titre: 'Cocyclicité', disponible: true},
            { id: 8, titre: 'Ensembles des points du plan tels que(MA,MB) = alpha modulo pi ou 2pi', disponible: true},
        ],
    },
    {
        id: 2,
        titre: 'Barycentre et produit scalaire',
        descriptions: [
         { id: 1, titre:'Barycentre d’un système de points pondérés',disponible: true },
         { id: 2, titre:'Fonction vectorielle de Leibniz d’un système',disponible: true },
         { id: 3, titre:'Ensembles de points liés à la fonction vectorielle de Leibniz',disponible: true },
         { id: 4, titre:'Théorème d’ALKASHI',disponible: true },
         { id: 5, titre:'Relations métriques dans un triangle',disponible: false },
         { id: 6, titre:'Distance d’un point à une droite',disponible: false },
         { id: 7, titre:'Théorèmes de la médiane',disponible: true },
         { id: 8, titre:'Lignes de niveau',disponible: false },
    
        ],
    },
    {
        id: 3,
        titre: 'Configuration dans l’espace',
        descriptions: [
             { id: 1, titre: 'Position relative dans l’espace',disponible: true },
             { id: 2, titre: 'Produit scalaire',disponible: true },
             { id: 3, titre: 'Géométrie analytique dans l’espace',disponible: false },
             { id: 4, titre: 'Produit vectoriel',disponible: true },
                     ]
    },
    {
        id: 4,
        titre: 'Transformations du plan',
        descriptions: [
            { id: 1, titre: 'Généralités sur les transformations planes (définitions et propriétés)',disponible: true },
            { id: 2, titre: 'Rappel sur les transformations usuelles (Translation, Homothétie, Rotation,Réflexion)',disponible: true },
            { id: 3, titre: 'Composition des transformations',disponible: false },
            { id: 4, titre: 'Expression analytique des transformations (translation, homothétie,réflexion)',disponible: true },
            { id: 5, titre: 'Isométries',disponible: false },
            { id: 6, titre: 'Symétrie glissante',disponible: true },
            { id: 7, titre: 'Similitudes directes',disponible: true },
            
        ]
    },
    {
        id: 5,
        titre: 'Courbes planes',
        descriptions: [
            { id: 1, titre: 'Coniques',disponible: true },
            { id: 2, titre: 'Courbes paramétrées', disponible: true },   
        ]
    },
    ], 
  },
   {
    id: 4,
    domaine: 'Organisation et gestion de données',
    chapitres: [
    {
        id: 1,
        titre: 'Probabilités et échantillonnage',
        descriptions: [
          { id: 1, titre: 'Probabilité discrète', disponible: true },
            { id: 2, titre: 'Probabilité continue', disponible: false},
            { id: 3, titre: 'Echantillonnage', disponible: true},
            
        ],
    },
    ],
  },
];

