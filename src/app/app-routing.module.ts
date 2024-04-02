import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'setores', pathMatch: 'full' },
  {
    path: 'setores',
    loadChildren:() => import('./setores/setores.module').then(m => m.SetoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
