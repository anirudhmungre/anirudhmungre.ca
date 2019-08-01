import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/core/home',
    pathMatch: 'full'
  },
  {
    path: 'app',
    children: [
      {
        path: 'core',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
