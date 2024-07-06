import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { RelatorioOpcaoUsos } from '../model/dto/RelatorioOpcaoUsos';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  generateExcel(data: any[], fileName: string): void {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    // Add headers
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);
    // Add data
    data.forEach((item) => {
      const row: any[] = [];
      headers.forEach((header) => {
        row.push(item[header]);
      });
      worksheet.addRow(row);
    });
    // Save the workbook to a blob
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `${fileName}.xlsx`);
    });
  }

  buscarDadosRelatorioOpcaoUsos(){
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<RelatorioOpcaoUsos[]>(`http://localhost:8080/historico-mensagem/relatorio1/${localStorage.getItem("idUsuario")}`, { headers });
  }

  buscarDadosRelatorioOpcaoUsosContato(){
    let token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<RelatorioOpcaoUsos[]>(`http://localhost:8080/historico-mensagem/relatorio2/${localStorage.getItem("idUsuario")}`, { headers });
  }
}
