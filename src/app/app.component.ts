import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from './shared/service/setor.service';
import { SetoresModule } from './setores/setores.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'TCS-FrontEnd';
  sidebarExpanded = true;
  constructor(
    private router: Router,
    private setorService: SetorService
  ) {}


  enviarParaSetorDetalhe(): void {
    this.router.navigate(['/setores/setor-detalhe']);
  }

}




