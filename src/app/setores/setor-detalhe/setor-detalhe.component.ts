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
  idSetor: number;
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
  excluirSetor(idSetor: number):void { console.log(idSetor)
    this.setorService.excluirSetores(idSetor).subscribe(
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

  navegarTelaSetorE(idSetor: number, nome: string, descricao: string): void {
    this.router.navigate(['setores/setor-listagem'], { queryParams: { idSetor, nome, descricao } });
  }
}


