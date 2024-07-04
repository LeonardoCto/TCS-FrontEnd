import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { HistoricoMensagemComponent } from './historico-mensagem/historico-mensagem.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoricoMensagemComponent,
    ListaContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ]
})
export class ContatosModule { }
