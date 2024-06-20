import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/shared/service/contato.service';
import { Contato } from '../../shared/model/Contato';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-listagem.component.html',
  styleUrls: ['./contato-listagem.component.css']
})

export class ContatoListComponent implements OnInit {

  contatos: Contato[] = [];
  termoPesquisa: string = '';

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

  adicionarNomeContato(contato: Contato): void {
    if (!contato.nome) {
      const novoNome = prompt('Digite o nome para o contato:');
      if (novoNome) {
        contato.nome = novoNome;
        this.atualizarContato(contato);
      }
    }
  }

  editarContato(contato: Contato): void {
    console.log(`Editar contato: ${contato.id}`);
  }

  excluirContato(contato: Contato): void {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contatoService.deletarContato(contato.id).subscribe(() => {
        this.carregarContatosOrdenadosPorMensagemRecente(); // Voltar a carregar os contatos ordenados pela mensagem recente após a exclusão
      });
    }
  }

  private atualizarContato(contato: Contato): void {
    this.contatoService.atualizarContato(contato.id, contato).subscribe(() => {
      this.carregarContatosOrdenadosPorMensagemRecente(); // Voltar a carregar os contatos ordenados pela mensagem recente após a atualização
    });
  }

}
