import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/tela-login',
    pathMatch: 'full'
  },
  {
    path: 'setores',
    loadChildren: () => import('./setores/setores.module').then(m => m.SetoresModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
