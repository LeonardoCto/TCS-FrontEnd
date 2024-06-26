import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensagemHistorico } from '../model/entity/MensagemHistorico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoMensagemService {

  readonly URL_BASE = "http://localhost:8080/historico-mensagem";

  constructor(private http: HttpClient) { }

  buscarHistoricoPorIdUsuario(idUsuario: number) {
    return this.http.get<MensagemHistorico[]>(`${this.URL_BASE}/${idUsuario}`);
  }
}
