import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrafoMensagemDto } from '../shared/model/dto/GrafoMensagemDto';
import { EdgeGrafoDto } from '../shared/model/dto/EdgeGrafoDto';
import { NodeGrafoDto } from '../shared/model/dto/NodeGrafoDto';
import { InputSalvarDto } from '../shared/model/dto/InputSalvarDto';
import { NgForm } from '@angular/forms';
import { MensagemSalvarDto } from '../shared/model/dto/MensagemSalvarDto';
import { Mensagem } from '../shared/model/entity/Mensagem';
import { InputEntity } from '../shared/model/entity/InputEntity';

@Injectable({
  providedIn: 'root'
})
export class ArvoreMensagemService {

  private readonly urlBase: string = "http://localhost:8080/mensagem";

  constructor(private http: HttpClient) { }

  obterArvoreMensagem(idSetor: number): Observable<GrafoMensagemDto> {
    let token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Imxlb25hcmRvQGhvdG1haWwuY29tIiwiZXhwIjoxNzE5NDQyNzk4fQ.wwf5BGtgxa2nbqrytFIUcSPGUP4CWGJqyS4BpI8qZ2w";
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<GrafoMensagemDto>(`${this.urlBase}/grafo/${idSetor}`,{ headers });
  }

  adicionarMensagem(nodeSelecionada: NodeGrafoDto | null, form: NgForm) {
    let requestBody = this.novaMensagem(nodeSelecionada,form);
    return this.http.post<MensagemSalvarDto>(this.urlBase, requestBody);
  }

  editarMensagem(nodeSelecionada: NodeGrafoDto | null, form: NgForm) {
    let requestBody = this.mensagemEditada(nodeSelecionada,form);
    return this.http.put<Mensagem>(this.urlBase, requestBody);
  }
  
  deletarMensagem(node: NodeGrafoDto){
    let requestBody: Mensagem = new Mensagem(node);
    return this.http.post<Mensagem>(`${this.urlBase}/delete`, requestBody);
  }

  editarInput(edge: EdgeGrafoDto | null, form: NgForm){
    if(edge == null){
      return;
    }
    let requestBody: InputEntity = new InputEntity(edge);
    console.log(form.value.inputEditado);
    requestBody.conteudo = form.value.inputEditado;
    return this.http.put<InputEntity>("http://localhost:8080/input", requestBody);
  }

  mensagemEditada(node: NodeGrafoDto | null, form: NgForm){
    if(node == null){
      return;
    }
    let mensagemEditada = new Mensagem(node)
    mensagemEditada.conteudo = form.value.novoConteudo;
    return mensagemEditada;
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