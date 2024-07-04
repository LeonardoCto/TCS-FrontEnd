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
    return this.http.get<Contato[]>(`${this.baseUrl}/${Number(localStorage.getItem("idUsuario"))}`);
  }

  contatoMensagemRec(): Observable<Contato[]> {
    let token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<Contato[]>(`${this.baseUrl}/mensagem-recente/${Number(localStorage.getItem("idUsuario"))}`, { headers });
  }

  criarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${this.baseUrl}`, contato);
  }

  buscarContatosPorTelefone(numero: string): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/${numero}`);
  }

  buscarContatosPorNomeUsuario(nome: string): Observable<Contato[]> {
    let token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<Contato[]>(`${this.baseUrl}/nome/${nome}`, { headers });
  }

  deletarContato(id: number): Observable<void> {
    let token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.delete<void>(`${this.baseUrl}/${id}`,{ headers });
  }

  atualizarContato(id: number, contato: Contato): Observable<Contato> {
    let token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.put<Contato>(`${this.baseUrl}/${id}`, contato, { headers });
  }

  verificarExistencia(numero: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/existencia/${numero}`);
  }
}
