import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SetorService } from 'src/app/shared/service/setor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setor-listagem',
  templateUrl: './setor-listagem.component.html',
  styleUrls: ['./setor-listagem.component.scss']
})
export class SetorListagemComponent{
  nome: string ;
  descricao: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['nome'] && params['descricao']) {
        this.nome = params['nome'];
        this.descricao = params['descricao'];
      }
    });
  }

  constructor(private setorService: SetorService, private router: Router, private route: ActivatedRoute) {}

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

