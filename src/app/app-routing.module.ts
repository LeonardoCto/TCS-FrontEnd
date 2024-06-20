import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoListComponent } from './contato/contato-listagem/contato-listagem.component';

const routes: Routes = [
  { path: 'contato-listagem', redirectTo: '/contato', pathMatch: 'full' },
  { path: '/mensagem-recente', component: ContatoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
