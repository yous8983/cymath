import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingPage } from './loading/loading.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },

  { path: 'loading', component: LoadingPage },   {
    path: 'list-cours',
    loadChildren: () => import('./list-cours/list-cours.module').then( m => m.ListCoursPageModule)
  },
  {
    path: 'enonces',
    loadChildren: () => import('./enonces/enonces.module').then( m => m.EnoncesPageModule)
  },
  {
    path: 'corriges',
    loadChildren: () => import('./corriges/corriges.module').then( m => m.CorrigesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
