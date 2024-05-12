import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdgeGrafoDto } from 'src/app/shared/model/dto/EdgeGrafoDto';
import { InputSalvarDto } from 'src/app/shared/model/dto/InputSalvarDto';
import { MensagemSalvarDto } from 'src/app/shared/model/dto/MensagemSalvarDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeGrafoDto';
import { ArvoreMensagemService } from '../arvore-mensagem.service';

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
  @Output()
  public eventoAtualizarGrafo = new EventEmitter();
  @Input() 
  public nodeSelecionada: NodeGrafoDto | null = null;
  @Input()
  public edgeSelecionada: EdgeGrafoDto | null = null;
  @Input()
  public arestas: EdgeGrafoDto[];
  public formAdicao: boolean = false;
  public formEdicaoMensagem: boolean = false;
  public formEdicaoInput: boolean = false;

  constructor(private arvoreMensagemService: ArvoreMensagemService){}

  recebeArestas(arestas: EdgeGrafoDto[]){
    this.arestas = arestas;
  }
  
  adicionarMensagem(form: NgForm){
    this.arvoreMensagemService.adicionarMensagem(this.nodeSelecionada,form)
      .subscribe((resultado) => {
        this.eventoAtualizarGrafo.emit();
      },
      (err) => {
        console.log("Erro: " + err);
      });
  }

  editarMensagem(form: NgForm){
    this.arvoreMensagemService.editarMensagem(this.nodeSelecionada, form)
    .subscribe(() => {
      this.eventoAtualizarGrafo.emit();
    }, 
    (err) =>{ 
      console.log(err);
    });
  }

  editarInput(form: NgForm){
    this.arvoreMensagemService.editarInput(this.edgeSelecionada, form)?.subscribe(()=>{
      this.eventoAtualizarGrafo.emit();
    },
    (err)=>{
      console.log(err);
    });
  }

  deletarMensagem(node: NodeGrafoDto){
    this.arvoreMensagemService.deletarMensagem(node).subscribe(()=>{
      this.eventoAtualizarGrafo.emit();
    },
    (err) => {
      console.log(err);
    });
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
