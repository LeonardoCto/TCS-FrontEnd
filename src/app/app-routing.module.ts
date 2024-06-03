import { Setor } from './shared/model/Setor';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorDetalheComponent } from './setores/setor-detalhe/setor-detalhe.component';
import { SetorListagemComponent } from './setores/setor-listagem/setor-listagem.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { 
    path: 'mensagens', loadChildren: ()=> import('./arvore-mensagem/arvore-mensagem.module')
    .then(m => m.ArvoreMensagemModule)
  },
  {
    path: 'setores',
    loadChildren:() => import('./setores/setores.module').then(m => m.SetoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
