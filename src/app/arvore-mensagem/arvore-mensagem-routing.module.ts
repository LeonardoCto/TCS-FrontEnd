import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArvoreMensagemComponent } from './arvore-mensagem/arvore-mensagem.component';

const routes: Routes = [
  {path: 'grafo/:idSetor', component: ArvoreMensagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArvoreMensagemRoutingModule { }
