import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioRoutingModule } from './relatorio/relatorio-routing.module';



@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule
  ]
})
export class RelatorioModule { }
