import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrafoMensagemDto } from '../shared/model/dto/GrafoMensagemDto';
import { EdgeGrafoDto } from '../shared/model/dto/EdgeGrafoDto';
import { NodeGrafoDto } from '../shared/model/dto/NodeGrafoDto';
import { InputSalvarDto } from '../shared/model/dto/InputSalvarDto';
import { NgForm } from '@angular/forms';
import { MensagemSalvarDto } from '../shared/model/dto/MensagemSalvarDto';

@Injectable({
  providedIn: 'root'
})
export class ArvoreMensagemService {

  private readonly urlBase: string = "http://localhost:8080/mensagem";

  constructor(private http: HttpClient) { }

  obterArvoreMensagem(): Observable<GrafoMensagemDto> {
    return this.http.get<GrafoMensagemDto>(`${this.urlBase}/grafo/1`);
  }

  adicionarMensagem(nodeSelecionada: NodeGrafoDto | null, form: NgForm) {
    let requestBody = this.novaMensagem(nodeSelecionada,form);
    return this.http.post<MensagemSalvarDto>(this.urlBase, requestBody);
  }

  novaMensagem(nodeSelecionada: NodeGrafoDto | null, form: NgForm){
    let retorno: MensagemSalvarDto | null = null;
    if(nodeSelecionada != null){
      let novaAresta: InputSalvarDto = new InputSalvarDto();
      novaAresta.conteudo = form.value.novoInput;
      novaAresta.idMensagemPai = +nodeSelecionada.id;
      let novaMensagem: MensagemSalvarDto = new MensagemSalvarDto(nodeSelecionada,novaAresta);
      novaMensagem.conteudo = form.value.novaMensagem;
      retorno = novaMensagem;
    }
    return retorno;
  }
}