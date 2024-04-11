import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../model/Setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = "http://localhost:8080/api/setores";

  salvar(setor: Setor): Observable<Setor> {
    return this.httpClient.post<Setor>(this.API, setor);
  }

  login(setor: Setor): Observable<Setor> {
    return this.httpClient.post<Setor>(`${this.API}/login`, setor);
  }

  buscarSetorPeloId(id: number): Observable<Setor> {
    return this.httpClient.get<Setor>(`${this.API}/${id}`);
  }
  atualizar(setor: Setor): Observable<Setor> {
    return this.httpClient.put<Setor>(`${this.API}`, setor);
  }
}
