import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../model/entity/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  listarContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}`);
  }

  contatoMensagemRec(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/mensagem-recente`);
  }

  criarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${this.baseUrl}`, contato);
  }

  buscarContatosPorTelefone(numero: string): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/${numero}`);
  }

  buscarContatosPorNomeUsuario(idUsuario: string): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/usuario/${idUsuario}`);
  }

  deletarContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  atualizarContato(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.baseUrl}/${id}`, contato);
  }

  verificarExistencia(numero: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/existencia/${numero}`);
  }
}
