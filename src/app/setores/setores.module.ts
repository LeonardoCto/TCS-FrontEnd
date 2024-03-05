import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';
import { SetoresRoutingModule } from './setores-routing-module';


@NgModule({
  declarations: [
    SetorDetalheComponent,
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    FormsModule,
  ]
})
export class SetoresModule { }