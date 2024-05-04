import { Component, OnInit } from '@angular/core';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import { GrafoMensagemDto } from 'src/app/shared/model/dto/GrafoMensagemDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeGrafoDto';

@Component({
  selector: 'app-arvore-mensagem',
  templateUrl: './arvore-mensagem.component.html',
  styleUrls: ['./arvore-mensagem.component.scss']
})
export class ArvoreMensagemComponent implements OnInit {
  public grafo : GrafoMensagemDto;
  public nodeSelecionada: NodeGrafoDto | null = null;

  constructor(private arvoreMensagemService: ArvoreMensagemService){}

  ngOnInit(){
    this.arvoreMensagemService.obterArvoreMensagem()
      .subscribe((resultado)=>{
        this.grafo = resultado;
      },
      (erro) => {
        console.log(erro);
      });
  }

  selecionarNode(node: NodeGrafoDto | null){
    this.nodeSelecionada = node;
  }

}
