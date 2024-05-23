import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  inserir(Form: NgForm): void {
    this.setorService.inserir({ nome: Form.value.nome, descricao: Form.value.descricao})
    .subscribe(
      (response: any) => {
        console.log(response.message);
        this.router.navigate(['setores/setor-listagem']);
      },
      (error) => {
        console.error('Erro no registro', error);
      }
    );
  }
}

