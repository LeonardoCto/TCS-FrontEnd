import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreMensagemRoutingModule } from './arvore-mensagem-routing.module';
import { ArvoreMensagemComponent } from './arvore-mensagem/arvore-mensagem.component';
import { FormsModule } from '@angular/forms';
import { ArvoreMensagemService } from './arvore-mensagem.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormularioArvoreComponent } from './formulario-arvore/formulario-arvore.component';

@NgModule({
  declarations: [
    ArvoreMensagemComponent,
    FormularioArvoreComponent
  ],
  imports: [
    CommonModule,
    ArvoreMensagemRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxGraphModule
  ],
  providers: [ArvoreMensagemService],
})
export class ArvoreMensagemModule { }
