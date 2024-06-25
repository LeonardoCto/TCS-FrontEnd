import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { SetorService } from './shared/service/setor.service';
import { SetoresModule } from './setores/setores.module';
import { SetorDetalheComponent } from './setores/setor-detalhe/setor-detalhe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'TCS-FrontEnd';

  constructor(
    private router: Router,
    private setorService: SetorService
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

  enviarParaSetorDetalhe(): void {
    this.router.navigate(['/setores/setor-detalhe']);
  }

  enviarParaRelatorio(): void {
    this.router.navigate(['/relatorio/tela-relatorio'])
  }

  enviarParaHome(): void {
    this.router.navigate(['/home/tela-principal'])
  }

}




