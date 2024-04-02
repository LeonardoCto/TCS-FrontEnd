import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorListagemComponent } from './setor-listagem/setor-listagem.component';

const routes: Routes = [{ path: ' ', component: SetorListagemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetoresRoutingModule {}
