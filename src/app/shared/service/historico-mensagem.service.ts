import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensagemHistorico } from '../model/entity/MensagemHistorico';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricoMensagemService {

  readonly URL_BASE = "http://localhost:8080/historico-mensagem";

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  buscarHistoricoPorIdUsuario(idUsuario: number) {
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<MensagemHistorico[]>(`${this.URL_BASE}/${idUsuario}`, {headers});
  }
}
