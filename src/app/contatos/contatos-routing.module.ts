import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoMensagemComponent } from './historico-mensagem/historico-mensagem.component';

const routes: Routes = [
  {
    "path": "historico-mensagem",
    component: HistoricoMensagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
