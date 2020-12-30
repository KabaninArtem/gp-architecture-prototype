import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-one'
  },
  {
    path: 'page-one',
    loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule)
  },  {
    path: 'page-three',
    loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
