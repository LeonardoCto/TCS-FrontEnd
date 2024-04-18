import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/shared/model/entity/Mensagem';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-arvore-mensagem',
  templateUrl: './arvore-mensagem.component.html',
  styleUrls: ['./arvore-mensagem.component.scss']
})
export class ArvoreMensagemComponent implements OnInit {
  public nome : string = "Gabriel";
  public arvoreMensagem: TreeNode<Mensagem>[] | null = [];

  constructor(private arvoreMensagemService: ArvoreMensagemService){}

  ngOnInit(){
    this.arvoreMensagemService.obterArvoreMensagem()
      .subscribe((resultado)=>{
        this.arvoreMensagem?.push(resultado);
      },
      (erro) => {
        console.log(erro)
      });
  }

}
