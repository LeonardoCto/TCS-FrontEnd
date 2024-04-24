import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrafoMensagemDto } from '../shared/model/dto/GrafoMensagemDto';

@Injectable({
  providedIn: 'root'
})
export class ArvoreMensagemService {

  private readonly url: string = "http://localhost:8080/mensagem/grafo/1";

  constructor(private http: HttpClient) { }

  obterArvoreMensagem(): Observable<GrafoMensagemDto> {
    return this.http.get<GrafoMensagemDto>(this.url);
  }
}
