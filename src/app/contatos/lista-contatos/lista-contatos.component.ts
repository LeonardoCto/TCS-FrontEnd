import { Component } from '@angular/core';
import { Contato } from 'src/app/shared/model/entity/Contato';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent {
  public contatos: Contato[] = [

    {
      "id": 1,
      "nome": "João Silva",
      "numero": "+55123456789",
      "mensagemRecente": "Olá, como vai?",
      "automatizado": false
    },

    {
      "id": 2,
      "nome": "Silva",
      "numero": "+55722454788",
      "mensagemRecente": "",
      "automatizado": false
    },
    {
      "id": 1,
      "nome": "Gabriel",
      "numero": "+55123456789",
      "mensagemRecente": "O melhor de mundo toma o doble",
      "automatizado": false
    },
    {
      "id": 1,
      "nome": "Cristiano Ronaldo",
      "numero": "+55123456789",
      "mensagemRecente": "Siiiiiiiii",
      "automatizado": false
    },
    {
      "id": 1,
      "nome": "Thorofin",
      "numero": "+55123456789",
      "mensagemRecente": "Eu nao tenho inimigos",
      "automatizado": false
    },

  ];
}
