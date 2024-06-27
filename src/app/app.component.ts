import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from './shared/service/setor.service';
import { UsuarioService } from './shared/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'TCS-FrontEnd';

  constructor(
    private router: Router,
    private setorService: SetorService,
    private usuarioService: UsuarioService
  ) {
    this.router.events.subscribe((event) => {
      if (
        this.router.url.includes('/setor-detalhe')
      ) {
      }
    });
  }
  ngOnInit(): void{

  }

  get PaginaLogin(): boolean {
    return this.router.url.includes('/login/tela-login');
  }

  get PaginaCadastro(): boolean {
    return this.router.url.includes('/cadastro/tela-cadastro');
  }
  enviarParaSetorDetalhe(): void {
    this.router.navigate(['/setores/setor-detalhe']);
  }

  enviarParaRelatorio(): void {
    this.router.navigate(['/relatorio/tela-relatorio'])
  }

  enviarParaHome(): void {
    this.router.navigate(['/home/tela-principal'])
  }
  enviarParaPerfil(): void {
    this.router.navigate(['/perfil/tela-perfil'])
  }

}




