import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreMensagemRoutingModule } from './arvore-mensagem-routing.module';
import { ArvoreMensagemComponent } from './arvore-mensagem/arvore-mensagem.component';


@NgModule({
  declarations: [
    ArvoreMensagemComponent
  ],
  imports: [
    CommonModule,
    ArvoreMensagemRoutingModule
  ]
})
export class ArvoreMensagemModule { }
