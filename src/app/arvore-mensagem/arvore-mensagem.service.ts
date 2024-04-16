import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../shared/model/entity/Mensagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArvoreMensagemService {

  private readonly url: string = "http://localhost:8080/mensagem/arvore";

  constructor(private http: HttpClient) { }

  obterArvoreMensagem(): Observable<Mensagem> {
    return this.http.get<Mensagem>(this.url);
  }
}
