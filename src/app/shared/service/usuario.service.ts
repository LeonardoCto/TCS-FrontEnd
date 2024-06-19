import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private setorUrl = 'http://localhost:8080/usuario';

  constructor(private httpClient : HttpClient) {

  }

  listarTodosUsuarios(): Observable<Array<Usuario>> {
    return this.httpClient.get<Array<Usuario>>(`${this.setorUrl}/listarTodos`);
  }

  listarUsuariosSetor(idSetor: number): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.setorUrl}/setor/${idSetor}`);
  }

  inserirUsuarioSetor(idUsuario: number, idSetor: number, administrador: boolean): Observable<void> {
    const params = new HttpParams()
      .set('idUsuario', idUsuario.toString())
      .set('idSetor', idSetor.toString())
      .set('administrador', administrador.toString());

    return this.httpClient.post<void>(`${this.setorUrl}/setorInserirUsuario`, null, { params });
  }

  excluirUsuarioDoSetor(idUsuario: number, idSetor: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.setorUrl}/excluirUsuarioDoSetor`, {
      params: new HttpParams()
        .set('idUsuario', idUsuario.toString())
        .set('idSetor', idSetor.toString())
    });
  }

}
