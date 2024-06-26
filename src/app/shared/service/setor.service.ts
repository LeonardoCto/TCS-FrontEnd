import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../model/Setor';
import { SetorSeletor } from '../model/seletor/setor.seletor';
import { SetorDTO } from './../model/SetorDTO';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

  readonly API = "";

  private setorUrl = 'http://localhost:8080/setores';

  constructor(private httpClient : HttpClient, private usuarioService: UsuarioService) {

  }

  inserir(setorDTO: SetorDTO, idUsuario: number): Observable<any> {
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.httpClient.post<any>(`${this.setorUrl}/inserir?idUsuario=${idUsuario}`, setorDTO, {headers});
  }

   carregarTodosSetores(): Observable<Setor[]> {
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.httpClient.get<Setor[]>('/api/setores', {headers}); 
  }

  listarTodosSetores(): Observable<Array<Setor>> {
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.httpClient.get<Array<Setor>>(`${this.setorUrl}/listarTodos`, {headers});
  }

   atualizarSetor(idSetor: number, nome: string, descricao: string): Observable<any> {
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    const corpoDaSolicitacao = {
      idSetor: idSetor,
      nome: nome,
      descricao: descricao
    };
    return this.httpClient.put<any>(`${this.setorUrl}/atualizar`, corpoDaSolicitacao, {headers});
  }

    excluirSetores(id: number): Observable<void> {
      let token = this.usuarioService.getToken();
      const headers = { 'Authorization': 'Bearer ' + token }
      return this.httpClient.delete<void>(`${this.setorUrl}/${id}`, {headers});
    }

    listarComSeletor(seletor: SetorSeletor){
      let token = this.usuarioService.getToken();
      const headers = { 'Authorization': 'Bearer ' + token }
      return this.httpClient.post<Array<Setor>>(this.setorUrl + "/seletor", seletor, {headers});
    }
  }
