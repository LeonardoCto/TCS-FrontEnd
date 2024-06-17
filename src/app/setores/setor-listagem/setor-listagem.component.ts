import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SetorService } from 'src/app/shared/service/setor.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setor-listagem',
  templateUrl: './setor-listagem.component.html',
  styleUrls: ['./setor-listagem.component.scss'],
})
export class SetorListagemComponent {
  idSetor: number;
  nome: string;
  descricao: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params['idSetor'] && params['nome'] && params['descricao']) {
        this.idSetor = params['idSetor'];
        this.nome = params['nome'];
        this.descricao = params['descricao'];
      }
    });
  }

  constructor(
    private setorService: SetorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //inserir com validação para que se o id for nullo ele inserir e se for != nullo ele chama o metodo atualizar
  inserir(Form: NgForm): void {
    const nome = Form.value.nome;
    const descricao = Form.value.descricao;

    if (!nome || !descricao) {
      // Verifica se os campos nome e descricao estão vazios
      if (!nome) {
        Swal.fire('Erro', 'Erro ao cadastrar o setor: o campo nome é obrigatório', 'error');
      } else if (!descricao) {
        Swal.fire('Erro', 'Erro ao cadastrar o setor: o campo descrição é obrigatório', 'error');
      }
      return; // Encerra a função sem chamar o serviço de inserção
    }

    if (this.idSetor == null) {
      this.setorService
        .inserir({ nome, descricao })
        .subscribe(
          (response: any) => {
            Swal.fire('Sucesso', 'Setor cadastrado!', 'success');
            this.router.navigate(['setores/setor-detalhe']);
          },
          (error) => {
            Swal.fire('Erro', 'Erro ao cadastrar o setor: ' + error, 'error');
            console.error('Erro no registro', error);
          }
        );
    } else {
      this.atualizarSetores(this.idSetor, nome, descricao);
    }
  }


  atualizarSetores(idSetor: number, nome: string, descricao: string): void {
    this.setorService.atualizarSetor(idSetor, nome, descricao).subscribe(
      (response: any) => {
        Swal.fire('Sucesso', 'Setor atualizado!', 'success');
        this.router.navigate(['setores/setor-detalhe'], {
          queryParams: { idSetor, nome, descricao },
        });
      },
      (error) => {
        Swal.fire('Erro', 'Erro ao atualizar o setor: ' + error, 'error');
        console.error('Erro no registro', error);
      }
    );
  }
}
