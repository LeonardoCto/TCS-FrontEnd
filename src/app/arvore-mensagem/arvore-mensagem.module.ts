import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreMensagemRoutingModule } from './arvore-mensagem-routing.module';
import { ArvoreMensagemComponent } from './arvore-mensagem/arvore-mensagem.component';
import { FormsModule } from '@angular/forms';
import { ArvoreMensagemService } from './arvore-mensagem.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    ArvoreMensagemComponent
  ],
  imports: [
    CommonModule,
    ArvoreMensagemRoutingModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
  ],
  providers: [ArvoreMensagemService],
})
export class ArvoreMensagemModule { }
