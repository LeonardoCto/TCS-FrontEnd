import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoMensagemComponent } from './historico-mensagem/historico-mensagem.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';

const routes: Routes = [
  {
    "path": "historico-mensagem",
    component: ListaContatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
