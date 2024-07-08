import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contato } from 'src/app/shared/model/entity/Contato';
import { MensagemHistorico } from 'src/app/shared/model/entity/MensagemHistorico';
import { HistoricoMensagemService } from 'src/app/shared/service/historico-mensagem.service';

@Component({
  selector: 'app-historico-mensagem',
  templateUrl: './historico-mensagem.component.html',
  styleUrls: ['./historico-mensagem.component.scss']
})
export class HistoricoMensagemComponent implements OnInit, OnChanges {
  public idUsuario: number;
  public historicoMensagem: MensagemHistorico[] = [];

  @Input() contatoSelecionado: Contato | null = null;

  constructor(private historicoMensagemService: HistoricoMensagemService){}

  ngOnInit(): void {
    this.obterHistoricoMensagem();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contatoSelecionado'] && this.contatoSelecionado) {
      this.idUsuario = this.contatoSelecionado.id;
      this.obterHistoricoMensagem();
    }
  }

  obterHistoricoMensagem(){
    this.historicoMensagemService.buscarHistoricoPorIdUsuario(this.idUsuario)
      .subscribe(
        (resultado) => {this.historicoMensagem = resultado},
        (err) => {console.log(err)}
      );
  }

}
