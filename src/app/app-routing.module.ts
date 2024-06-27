import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/tela-login',
    pathMatch: 'full'
  },
  { 
    path: 'mensagens', loadChildren: ()=> import('./arvore-mensagem/arvore-mensagem.module')
    .then(m => m.ArvoreMensagemModule)
  },
  {
    path: 'setores',
  loadChildren:() => import('./setores/setores.module').then(m => m.SetoresModule)
  },
  {
   path: 'home',
   loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contatos',
    loadChildren:() => import('./contatos/contatos.module').then(m => m.ContatosModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then(m => m.RelatorioModule)
  },
  {
   path: 'login',
   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadatro.module').then(m => m.CadastroModule)
  },
  {
   path: 'perfil',
   loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
