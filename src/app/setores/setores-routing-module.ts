import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';

const routes: Routes = [
  {path: 'detalhe', component: SetorDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }