import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule
  ]
})
export class CadastroModule { }
