import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';
import { SetorListagemComponent } from './setor-listagem/setor-listagem.component';
import { SetorVisualizacaoComponent } from './setor-visualizacao/setor-visualizacao.component';

const routes: Routes = [
  {path: 'setor-detalhe', component: SetorDetalheComponent},
  {path: 'setor-listagem', component: SetorListagemComponent },
  {path: 'setor-visualizacao', component: SetorVisualizacaoComponent },
  {path: 'setor-visualizacao/:id', component: SetorVisualizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
