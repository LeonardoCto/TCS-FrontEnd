import { Component, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from 'src/app/shared/service/setor.service';

@Component({
  selector: 'app-setor-listagem',
  templateUrl: './setor-listagem.component.html',
  styleUrls: ['./setor-listagem.component.scss']
})
export class SetorListagemComponent  {
  nome: string;
  descricao: string;

  constructor(private setorService: SetorService, private router: Router) {}

  cadastrar(): void {
    this.setorService.cadastrar({ nome: this.nome, descricao: this.descricao})
    .subscribe(
      (response: any) => {
        console.log(response.message); // Mensagem de confirmação da API
        this.router.navigate(['setores/setor-listagem']);
      },
      (error) => {
        console.error('Erro no registro', error);
      }
    );
  }
}

