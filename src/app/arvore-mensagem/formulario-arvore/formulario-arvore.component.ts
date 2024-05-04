import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdgeGrafoDto } from 'src/app/shared/model/dto/EdgeGrafoDto';
import { InputSalvarDto } from 'src/app/shared/model/dto/InputSalvarDto';
import { MensagemSalvarDto } from 'src/app/shared/model/dto/MensagemSalvarDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeGrafoDto';

@Component({
  selector: 'app-formulario-arvore',
  templateUrl: './formulario-arvore.component.html',
  styleUrls: ['./formulario-arvore.component.scss']
})
export class FormularioArvoreComponent {
  @Output()
  public eventoDesselecionar = new EventEmitter();
  @Output()
  public eventoRecebeArestas = new EventEmitter<EdgeGrafoDto[]>();
  @Input() 
  public nodeSelecionada: NodeGrafoDto | null = null;
  @Input()
  public arestas: EdgeGrafoDto[];
  public formAdicao: boolean = false;
  public formEdicaoMensagem: boolean = false;
  public formEdicaoInput: boolean = false;

  
  recebeArestas(arestas: EdgeGrafoDto[]){
    this.arestas = arestas;
  }
  
  adicionarMensagem(form: NgForm){
    let aresta: EdgeGrafoDto | undefined = this.arestas.find(
      (aresta)=> aresta.source == this.nodeSelecionada?.id);
      if(aresta != undefined && this.nodeSelecionada != null){
      let novaAresta: InputSalvarDto = new InputSalvarDto();
      novaAresta.conteudo = form.value.novoInput;
      novaAresta.idMensagemPai = +aresta.source;
      let novaMensagem: MensagemSalvarDto = new MensagemSalvarDto(this.nodeSelecionada,novaAresta);
      novaMensagem.conteudo = form.value.novaMensagem;
      console.log(novaMensagem);
    }
  }

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
