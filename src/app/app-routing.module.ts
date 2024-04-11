import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { 
    path: 'arvoreMensagem', loadChildren: ()=> import('./arvore-mensagem/arvore-mensagem.module')
    .then(m => m.ArvoreMensagemModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
