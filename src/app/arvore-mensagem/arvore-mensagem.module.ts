import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreMensagemRoutingModule } from './arvore-mensagem-routing.module';
import { ArvoreMensagemComponent } from './arvore-mensagem/arvore-mensagem.component';
import { ArvoreMensagemService } from './arvore-mensagem.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormularioArvoreComponent } from './formulario-arvore/formulario-arvore.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArvoreMensagemComponent,
    FormularioArvoreComponent
  ],
  imports: [
    CommonModule,
    ArvoreMensagemRoutingModule,
    HttpClientModule,
    NgxGraphModule,
    FormsModule
  ],
  providers: [ArvoreMensagemService],
})
export class ArvoreMensagemModule { }
