import { Component, OnInit } from '@angular/core';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import { GrafoMensagemDto } from 'src/app/shared/model/dto/GrafoMensagemDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeGrafoDto';
import { EdgeGrafoDto } from 'src/app/shared/model/dto/EdgeGrafoDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arvore-mensagem',
  templateUrl: './arvore-mensagem.component.html',
  styleUrls: ['./arvore-mensagem.component.scss']
})
export class ArvoreMensagemComponent implements OnInit {
  public grafo : GrafoMensagemDto;
  public nodeSelecionada: NodeGrafoDto | null = null;
  public edgeSelecionada: EdgeGrafoDto | null = null;
  public idSetor: number;

  constructor(
    private arvoreMensagemService: ArvoreMensagemService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.idSetor = this.route.snapshot.params["idSetor"];
    this.atualizarGrafo();
  }

  atualizarGrafo(){
    this.arvoreMensagemService.obterArvoreMensagem(this.idSetor)
    .subscribe((resultado)=>{
      this.grafo = resultado;
    },
    (erro) => {
      console.log(erro);
    });
  }

  selecionarNode(node: NodeGrafoDto | null){
    this.edgeSelecionada = null;
    this.nodeSelecionada = node;
  }

  selecionarEdge(edge: EdgeGrafoDto | null){
    this.nodeSelecionada = null;
    this.edgeSelecionada = edge;
  }

}
