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
  idSetor: number;
  nome: string;
  descricao: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params['idSetor'] && params['nome'] && params['descricao']) {
        this.idSetor = params['idSetor']
        this.nome = params['nome'];
        this.descricao = params['descricao'];
      }
    });
  }

  constructor(private setorService: SetorService, private router: Router, private route: ActivatedRoute) {}


  //inserir com validação para que se o id for nullo ele inserir e se for != nullo ele chama o metodo atualizar
  inserir(Form: NgForm): void {
    if(this.idSetor == null){
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
    }else{
     this.atualizarSetores(this.idSetor, this.nome, this.descricao)
    }

  }

  atualizarSetores(idSetor: number, nome: string, descricao: string): void {
    this.setorService.atualizarSetor(idSetor, nome, descricao).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['setores/setor-detalhe'], { queryParams: { idSetor, nome, descricao } });
      },
      (error) => {
        console.error('Erro no registro', error);
      }
    );
  }

}

