import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { HistoricoMensagemComponent } from './historico-mensagem/historico-mensagem.component';


@NgModule({
  declarations: [
    HistoricoMensagemComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
