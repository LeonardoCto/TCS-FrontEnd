import { Setor } from './shared/model/Setor';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorDetalheComponent } from './setores/setor-detalhe/setor-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: 'setores', pathMatch: 'full' },
  {
    path: 'setores',
    loadChildren:() => import('./setores/setores.module').then(m => m.SetoresModule)
  },
  {
    path: 'setor-detalhe', component: SetorDetalheComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
