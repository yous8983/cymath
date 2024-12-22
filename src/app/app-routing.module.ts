import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingPage } from './loading/loading.page';
import { CoursPage } from './cours/cours.page'; // Import standalone component
import { ChapitreDetailPage } from './chapitre-detail/chapitre-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full',
  },

  { path: 'loading', component: LoadingPage },
  {
    path: 'list-cours',
    loadChildren: () =>
      import('./list-cours/list-cours.module').then(
        (m) => m.ListCoursPageModule
      ),
  },
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
  {
    path: 'cours',
    loadComponent: () => import('./cours/cours.page').then((m) => m.CoursPage),
  },
  { path: 'cours/:id', component: CoursPage },   {
    path: 'chapitre-detail',
    loadChildren: () => import('./chapitre-detail/chapitre-detail.module').then( m => m.ChapitreDetailPageModule)
  },
   { path: 'chapitre/:id', component: ChapitreDetailPage }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
