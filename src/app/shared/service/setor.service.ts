import { SetorDTO } from './../model/SetorDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../model/Setor';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

  readonly API = "";

  private setorUrl = 'http://localhost:8080/setores';

  constructor(private httpClient : HttpClient) { }

  inserir(setorDTO: SetorDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.setorUrl}/inserir`, setorDTO);
  }

   carregarTodosSetores(): Observable<Setor[]> {
    return this.httpClient.get<Setor[]>('/api/setores'); 
  }

  login(setor: Setor): Observable<Setor> {
    return this.httpClient.post<Setor>(`${this.API}/login`, setor);
  }
  listarTodosSetores(): Observable<Array<Setor>> {
    return this.httpClient.get<Array<Setor>>(`${this.setorUrl}/listarTodos`);
  }
}
