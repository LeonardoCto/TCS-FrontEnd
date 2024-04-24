import { Component, OnInit } from '@angular/core';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import { GrafoMensagemDto } from 'src/app/shared/model/dto/GrafoMensagemDto';

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

}
