import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SetorListagemComponent } from './setor-listagem/setor-listagem.component';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';
import { SetoresRoutingModule } from './setores-routing-module';


@NgModule({
  declarations: [
    SetorListagemComponent,
    SetorDetalheComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
