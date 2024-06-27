import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from 'src/app/shared/model/Setor';
import { SetorService } from 'src/app/shared/service/setor.service';
import { SetorSeletor } from '../../shared/model/seletor/setor.seletor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setor-detalhe',
  templateUrl: './setor-detalhe.component.html',
  styleUrls: ['./setor-detalhe.component.scss'],
})
export class SetorDetalheComponent implements OnInit {
  @ViewChild('ngForm', { static: true })
  public ngForm!: NgForm;

  constructor(
    private setorService: SetorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public seletor: SetorSeletor = new SetorSeletor();
  public setores: Array<Setor> = new Array();
  public setoresFiltrados: Array<Setor> = new Array(); // Array para os setores filtrados
  idSetor: number;
  nome: string;
  descricao: string;

  ngOnInit(): void {
    this.listarTodos();
  }

  enviarParaSetorCadastro(): void {
    this.router.navigate(['/setores/setor-listagem']);
  }

  currentPage = 1;
  itemsPerPage = 4;

  get paginatedSetores() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.setoresFiltrados.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.setoresFiltrados.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  //METODO PARA LISTAR TODOS SETORES
  listarTodos(): void {
    this.setorService.listarTodosSetores().subscribe(
      (response: any) => {
        this.setores = response;
        this.setoresFiltrados = response;
        this.router.navigate(['setores/setor-detalhe']);
      },
      (error) => {
        console.error('Erro no registro', error);
      }
    );
  }
  //NAVAEGAR TELA SETOR LISTAGEM
  navegarTelaSetorE(idSetor: number, nome: string, descricao: string): void {
    this.router.navigate(['setores/setor-listagem'], {
      queryParams: { idSetor, nome, descricao },
    });
  }

  //NAVEGAR TELA SETOR VISUALIZAÇAO
    nagegarTelaVSetor(id: number) {
      this.router.navigate(['setores/setor-visualizacao', id]);
    }

//FILTRO METODO DE PESQUISA
  pesquisar(): void {
    if (this.seletor.nome) {
      this.setoresFiltrados = this.setores.filter((setor) =>
        setor.nome.toLowerCase().includes(this.seletor.nome.toLowerCase())
      );
    } else {
      this.setoresFiltrados = this.setores;
    }
  }

  //METODO LIMPAR PESQUISA
  limpar(): void {
    this.seletor = new SetorSeletor();
    this.setoresFiltrados = this.setores; // ATUALIZA TABELA
  }

  //METODO PARA EXCLUIR SETOR
  excluirSetor(idSetor: number): void {
    Swal.fire({
        title: 'Você está certo disso?',
        text: 'Deseja excluir o setor #' + idSetor + '?',
        icon: 'warning',
        showCancelButton: true,
    }).then((retorno) => {
        if (retorno.isConfirmed) {
            this.setorService.excluirSetores(idSetor).subscribe(
                (response: any) => {
                    Swal.fire('Sucesso', 'Setor excluído!', 'success');
                    this.router.navigate(['setores/setor-detalhe']);
                },
                (error) => {
                    let errorMessage = 'Erro ao excluir o setor: Não é possível excluir setor com usuário vinculado.';
                    if (error.status === 409) { // Conflito - Violação de integridade referencial
                        errorMessage = error.error;
                    }
                    Swal.fire('Erro', errorMessage, 'error');
                    console.error('Erro no registro', error);
                }
            );
        }
    });
}
}
