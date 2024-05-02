import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeDto';

@Component({
  selector: 'app-formulario-arvore',
  templateUrl: './formulario-arvore.component.html',
  styleUrls: ['./formulario-arvore.component.scss']
})
export class FormularioArvoreComponent {
  @Output()
  public eventoDesselecionar = new EventEmitter();
  @Input() 
  public nodeSelecionada: NodeGrafoDto | null = null;
  public formAdicao: boolean = false;
  public formEdicaoMensagem: boolean = false;
  public formEdicaoInput: boolean = false;

  ativarFormAdicao() {
    this.desativarForms();
    this.formAdicao = true;
  }

  ativarFormEdicaoMensagem(){
    this.desativarForms();
    this.formEdicaoMensagem = true;
  }

  ativarFormEdicaoInput(){
    this.desativarForms();
    this.formEdicaoInput = true;
  }

  desativarForms(){
    this.formAdicao = false;
    this.formEdicaoMensagem = false;
    this.formEdicaoInput = false;
  }

  desselecionar(){
    this.nodeSelecionada = null;
    this.desativarForms();
    this.eventoDesselecionar.emit();
  }
}
