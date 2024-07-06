import { Component } from '@angular/core';
import { ExcelService } from 'src/app/shared/service/excel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {

  constructor(private excelService: ExcelService) {}

  gerarRelatorioOpcaoUsos(): void {
    this.excelService.buscarDadosRelatorioOpcaoUsos().subscribe(data => {
      if(data.length > 1){
        return this.excelService.generateExcel(data, 'Relatório de opções mais utilizadas');
      }
      Swal.fire({
        icon:"error",
        title:"Sem dados",
        text: "Ainda não há dados para gerar o relatório"
      })
    },
      err => {
        Swal.fire({
          icon:"error",
          title:"Erro",
          text: "Ocorreu algum erro, tente denovo mais tarde"
        });
      }
    );
  }

  gerarRelatorioOpcaoUsosContato(): void {
    this.excelService.buscarDadosRelatorioOpcaoUsosContato().subscribe(data => {
      if(data.length > 1){
        return this.excelService.generateExcel(data, 'Relatório de opções mais usadas por cada contato');
      }
      Swal.fire({
        icon:"error",
        title:"Sem dados",
        text: "Ainda não há dados para gerar o relatório"
      })
    },
      err => {
        Swal.fire({
          icon:"error",
          title:"Erro",
          text: "Ocorreu algum erro, tente denovo mais tarde"
        });
      }
    );
  }
}
