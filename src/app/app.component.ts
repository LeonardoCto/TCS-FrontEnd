import { Component } from '@angular/core';
import { SetorService } from './shared/service/setor.service';
import { Router } from '@angular/router';

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

  }


setoresDetalhea(){
  this.router.navigate(['setores/detalhe']);
}
}
