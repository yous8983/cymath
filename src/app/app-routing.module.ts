import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingPage } from './loading/loading.page'; // Standalone component
import { CoursPage } from './cours/cours.page'; // Standalone component
import { ChapitreDetailPage } from './chapitre-detail/chapitre-detail.page'; // Standalone component
import { ListExercicesPage } from './list-exercices/list-exercices.page'; // Standalone component
import { ExerciceDetailPage } from './exercice-detail/exercice-detail.page'; // Standalone component

const routes: Routes = [
  // Default and fallback routes
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingPage },

  // Home module (lazy loaded)
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  // List Cours module (lazy loaded)
  {
    path: 'list-cours',
    loadChildren: () =>
      import('./list-cours/list-cours.module').then(
        (m) => m.ListCoursPageModule
      ),
  },

  // Cours standalone component
  { path: 'cours', component: CoursPage },
  { path: 'cours/:id', component: CoursPage },

  // Chapitre detail standalone component
  { path: 'chapitre/:id', component: ChapitreDetailPage },

  // Exercices module and standalone components
  { path: 'list-exercices', component: ListExercicesPage },
  { path: 'exercice/:id', component: ExerciceDetailPage },

  // Enoncés and corrigés standalone components
  {
    path: 'enonce/:id',
    loadComponent: () =>
      import('./enonce-detail/enonce-detail.page').then(
        (m) => m.EnonceDetailPage
      ),
  },
  {
    path: 'corrige/:id',
    loadComponent: () =>
      import('./corrige-detail/corrige-detail.page').then(
        (m) => m.CorrigeDetailPage
      ),
  },

  // Enoncés and corrigés lists (lazy loaded)
  {
    path: 'enonces',
    loadChildren: () =>
      import('./enonces/enonces.module').then((m) => m.EnoncesPageModule),
  },
  {
    path: 'corriges',
    loadChildren: () =>
      import('./corriges/corriges.module').then((m) => m.CorrigesPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
