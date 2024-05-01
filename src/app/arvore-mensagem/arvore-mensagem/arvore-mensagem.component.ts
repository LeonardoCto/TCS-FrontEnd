import { Component, OnInit } from '@angular/core';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import { GrafoMensagemDto } from 'src/app/shared/model/dto/GrafoMensagemDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeDto';

@Component({
  selector: 'app-arvore-mensagem',
  templateUrl: './arvore-mensagem.component.html',
  styleUrls: ['./arvore-mensagem.component.scss']
})
export class ArvoreMensagemComponent implements OnInit {
  public grafo : GrafoMensagemDto;

  constructor(private arvoreMensagemService: ArvoreMensagemService){}

  ngOnInit(){
    this.arvoreMensagemService.obterArvoreMensagem()
      .subscribe((resultado)=>{
        this.grafo = resultado;
      },
      (erro) => {
        console.log(erro)
      });
  }

  click(node: NodeGrafoDto){
    alert(node);
  }

}
