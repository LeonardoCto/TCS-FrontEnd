import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoListComponent } from './contato-listagem/contato-listagem.component';

const routes: Routes = [
  {path: 'historico', component: ContatoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
