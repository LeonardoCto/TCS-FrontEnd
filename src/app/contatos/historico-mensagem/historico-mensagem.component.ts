import { Component, OnInit } from '@angular/core';
import { MensagemHistorico } from 'src/app/shared/model/entity/MensagemHistorico';
import { HistoricoMensagemService } from 'src/app/shared/service/historico-mensagem.service';

@Component({
  selector: 'app-historico-mensagem',
  templateUrl: './historico-mensagem.component.html',
  styleUrls: ['./historico-mensagem.component.scss']
})
export class HistoricoMensagemComponent implements OnInit {
  // idUsuario valor virá do componente de lista de usuários
  public idUsuario: number = 1;
  public historicoMensagem: MensagemHistorico[] = [];

  constructor(private historicoMensagemService: HistoricoMensagemService){}

  ngOnInit(): void {
    this.obterHistoricoMensagem();
  }

  obterHistoricoMensagem(){
    this.historicoMensagemService.buscarHistoricoPorIdUsuario(this.idUsuario)
      .subscribe(
        (resultado) => {this.historicoMensagem = resultado},
        (err) => {console.log(err)}
      );
  }

}
