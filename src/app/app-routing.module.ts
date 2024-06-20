import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoListComponent } from './contato/contato-listagem/contato-listagem.component';

const routes: Routes = [
  {
    path: 'contato', loadChildren: ()=> import('./contato/contato.module')
    .then(m => m.ContatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
