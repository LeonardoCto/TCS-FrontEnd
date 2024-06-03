import { SetorDTO } from './../model/SetorDTO';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../model/Setor';


@Injectable({
  providedIn: 'root'
})
export class SetorService {


  private setorUrl = 'http://localhost:8080/setores';

  constructor(private httpClient : HttpClient) {

  }

  inserir(setorDTO: SetorDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.setorUrl}/inserir`, setorDTO);
  }

  listarTodosSetores(): Observable<Array<Setor>> {
    return this.httpClient.get<Array<Setor>>(`${this.setorUrl}/listarTodos`);
  }

 // atualizarSetor(id: number, nome: string, descrição: string): Observable<any> {

   //   return this.httpClient.put<any>(`${this.setorUrl}/atualizar`, Setor);
   // }


   atualizarSetor(id: number, nome: string, descricao: string): Observable<any> {
    const corpoDaSolicitacao = {
      id: id,
      nome: nome,
      descricao: descricao
    };
    return this.httpClient.put<any>(`${this.setorUrl}/atualizar`, corpoDaSolicitacao);
  }

    excluirSetores(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.setorUrl}/${id}`);
    }
  }

