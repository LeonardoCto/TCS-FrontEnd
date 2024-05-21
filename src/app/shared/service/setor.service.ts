import { SetorDTO } from './../model/SetorDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../model/Setor';


@Injectable({
  providedIn: 'root'
})
export class SetorService {


  private setorUrl = 'http://localhost:8080/setores';

  constructor(private httpClient : HttpClient) { }

  inserir(setorDTO: SetorDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.setorUrl}/inserir`, setorDTO);
  }
  }
