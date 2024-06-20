import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContatoListComponent } from './contato-listagem/contato-listagem.component';
import { ContatoService } from '../shared/service/contato.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContatoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContatoService
  ],
  exports: [
    ContatoListComponent
  ]
})
export class ContatoModule { }
