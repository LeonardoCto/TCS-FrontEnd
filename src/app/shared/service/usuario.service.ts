import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../model/LoginDTO';
import { Usuario } from '../model/Usuario';
import { CadastroDTO } from '../model/CadastroDTO';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private usuarioUrl = 'http://localhost:8080/usuario';
  private readonly  authUrL = 'http://localhost:8080/auth'

  constructor(private httpClient : HttpClient) {

  }

  armazenarTokenJWT(token: string) {
    localStorage.setItem('token', token);
    console.log(token)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  deleteToken(){
    return localStorage.removeItem('token');
  }

  login(loginDTO: LoginDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>(`${this.authUrL}/login`, loginDTO, {headers});
  }

  cadastro(cadastroDTO: CadastroDTO){
    return this.httpClient.post<any>(`${this.authUrL}/cadastro`, cadastroDTO);
  }

  listarTodosUsuarios(): Observable<Array<Usuario>> {
    return this.httpClient.get<Array<Usuario>>(`${this.usuarioUrl}/listarTodos`);
  }

  listarUsuariosSetor(idSetor: number): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.usuarioUrl}/setor/${idSetor}`);
  }

  inserirUsuarioSetor(idUsuario: number, idSetor: number, administrador: boolean): Observable<void> {
    const params = new HttpParams()
      .set('idUsuario', idUsuario.toString())
      .set('idSetor', idSetor.toString())
      .set('administrador', administrador.toString());

    return this.httpClient.post<void>(`${this.usuarioUrl}/setorInserirUsuario`, null, { params });
  }

  excluirUsuarioDoSetor(idUsuario: number, idSetor: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.usuarioUrl}/excluirUsuarioDoSetor`, {
      params: new HttpParams()
        .set('idUsuario', idUsuario.toString())
        .set('idSetor', idSetor.toString())
    });
  }
//SERVICE PARA VALIDAÇÃO SE USUARIO_SETOR ESTA INSERIDO NO SETOR// FEITO COM SERVICE POIS USUARIO_SETOR É USADO NO REPOSITORY
  existsUsuarioNoSetor(idUsuario: number, idSetor: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.usuarioUrl}/exists`, {
      params: new HttpParams()
        .set('idUsuario', idUsuario.toString())
        .set('idSetor', idSetor.toString())
    });
  }

}
