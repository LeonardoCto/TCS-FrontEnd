import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/shared/model/entity/Contato';
import { ContatoService } from 'src/app/shared/service/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {

  contatos: Contato[] = [];
  termoPesquisa: string = '';
  contatoEditando: Contato = new Contato();
  contatoSelecionado: Contato | null = null;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.carregarContatosOrdenadosPorMensagemRecente();
  }

  carregarContatosOrdenadosPorMensagemRecente(): void {
    this.contatoService.contatoMensagemRec().subscribe((data: Contato[]) => {
      this.contatos = data;
    });
  }

  pesquisarContatos(): void {
    if (this.termoPesquisa.trim() !== '') {
      if (!isNaN(Number(this.termoPesquisa))) {
        this.contatoService.buscarContatosPorTelefone(this.termoPesquisa).subscribe((contatos: Contato[]) => {
          console.log(contatos);
          this.contatos = contatos;
        });
      } else if (/[a-z]/.test(this.termoPesquisa) || /[A-Z]/.test(this.termoPesquisa)) {
        this.contatoService.buscarContatosPorNomeUsuario(this.termoPesquisa).subscribe((contatos: Contato[]) => {
          console.log(contatos);
          this.contatos = contatos;
        });
      } else {
        console.log("O termo de pesquisa não contém letras.");
      }
    } else {
      this.carregarContatosOrdenadosPorMensagemRecente();
    }
  }


  editarContato(contato: Contato): void {
    if (!contato.nome) {
      if (confirm(`O contato selecionado não possui um nome. Deseja adicionar um nome a este contato?`)) {
        this.contatoEditando = { ...contato };
      }
    } else {
      this.contatoEditando = { ...contato };
    }
  }

  cancelarEdicaoNome(): void {
    this.contatoEditando = new Contato();
    this.carregarContatosOrdenadosPorMensagemRecente();
  }

  salvarEdicaoNome(): void {
    if (this.contatoEditando) {
      this.contatoService.atualizarContato(this.contatoEditando.id, this.contatoEditando).subscribe(() => {
        this.contatoEditando = new Contato();
        this.carregarContatosOrdenadosPorMensagemRecente();
      });
    }
  }

  excluirContato(contato: Contato): void {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contatoService.deletarContato(contato.id).subscribe(() => {
        this.carregarContatosOrdenadosPorMensagemRecente();
      });
    }
  }
  selecionarContato(contato: Contato): void {
    this.contatoSelecionado = contato;
  }
  private atualizarContato(contato: Contato): void {
    this.contatoService.atualizarContato(contato.id, contato).subscribe(() => {
      this.carregarContatosOrdenadosPorMensagemRecente();
    });
  }
}
