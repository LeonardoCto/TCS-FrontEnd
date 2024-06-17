import { HttpClient, HttpHeaders  } from '@angular/common/http';
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
}
