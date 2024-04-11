import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing-module';
import { SetorListagemComponent } from './setor-listagem/setor-listagem.component';


@NgModule({
  declarations: [
    SetorListagemComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
