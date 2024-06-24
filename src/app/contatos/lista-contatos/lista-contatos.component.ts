import { Component } from '@angular/core';
import { Contato } from 'src/app/shared/model/entity/Contato';
import { ContatoService } from 'src/app/shared/service/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent {

  contatos: Contato[] = [];
  termoPesquisa: string = '';
  contatoEditando: Contato = new Contato();

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
        this.contatoService.buscarContatosPorNomeUsuario(this.termoPesquisa).subscribe((contatos: Contato[]) => {
          this.contatos = contatos;
        });
      } else {
        this.contatoService.buscarContatosPorTelefone(this.termoPesquisa).subscribe((contatos: Contato[]) => {
          this.contatos = contatos;
        });
      }
    } else {
      this.carregarContatosOrdenadosPorMensagemRecente();
    }
  }

  confirmarEdicao(contato: Contato): void {
    if (confirm(`Deseja editar o contato ${contato.nome}?`)) {
      this.editarContato(contato);
    }
  }

  editarContato(contato: Contato): void {
    this.contatoEditando = { ...contato };
  }

  adicionarNomeContato(contato: Contato): void {
    if (!contato.nome) {
      const novoNome = prompt('Digite o nome para o contato:');
      if (novoNome) {
        contato.nome = novoNome;
        this.atualizarContato(contato);
      }
    }
  }
  cancelarEdicaoNome(): void {
    this.contatoEditando;
  }

  salvarEdicaoNome(): void {
    if (this.contatoEditando) {
      this.contatoService.atualizarContato(this.contatoEditando.id, this.contatoEditando).subscribe(() => {
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
  private atualizarContato(contato: Contato): void {
    this.contatoService.atualizarContato(contato.id, contato).subscribe(() => {
      this.carregarContatosOrdenadosPorMensagemRecente();
    });
  }

}
