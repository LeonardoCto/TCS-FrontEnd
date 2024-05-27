import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from 'src/app/shared/model/Setor';
import { SetorService } from 'src/app/shared/service/setor.service';

@Component({
  selector: 'app-setor-detalhe',
  templateUrl: './setor-detalhe.component.html',
  styleUrls: ['./setor-detalhe.component.scss']
})
export class SetorDetalheComponent implements OnInit {

  @ViewChild('ngForm', { static: true })
  public ngForm!: NgForm;

  //CONSTRUTOR
  constructor(private setorService: SetorService, private router: Router, private route: ActivatedRoute) {}

  //OBJETOS
  public setores: Array<Setor> = new Array;
  id: number;
  nome: string;
  descricao: string;

    ngOnInit(): void {

     this.listarTodos();
    }

    //navegação

    enviarParaSetorCadastro(): void{
      this.router.navigate(['/setores/setor-listagem'])
    }

  //PAGINAÇÃO LISTA DE SETORES
  currentPage = 1;
  itemsPerPage = 4;

  get paginatedSetores() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.setores.slice(start, end);
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.setores.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
///////////////////////////////////////////////////////////////////////

//METODOS DA TELA DE LISTAGEM


listarTodos(): void {
  this.setorService.listarTodosSetores().subscribe(
    (response: any) => {
      console.log(response);
      this.setores = response;
      this.router.navigate(['setores/setor-detalhe']);
    },
    (error) => {
      console.error('Erro no registro', error);
    }
    );
  }

  excluirSetor(setorId: number):void {
    this.setorService.excluirSetores(setorId).subscribe(
      (response: any) => {
      console.log(response);
      this.setores = response;
      this.router.navigate(['setores/setor-detalhe']);
    },
    (error) => {
      console.error('Erro no registro', error);
    }
    );
}
atualizarSetores(idSetor: number, nome: string, descricao: string): void {
  this.setorService.atualizarSetor  ({ nome, descricao }).subscribe(
    (response: any) => {
      console.log(response);
      this.setores = response;
      this.router.navigate(['setores/setor-listagem'], { queryParams: { nome, descricao } });
    },
    (error) => {
      console.error('Erro no registro', error);
    }
  );
}
  }

