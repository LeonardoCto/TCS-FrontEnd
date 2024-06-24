import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { HistoricoMensagemComponent } from './historico-mensagem/historico-mensagem.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';


@NgModule({
  declarations: [
    HistoricoMensagemComponent,
    ListaContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
