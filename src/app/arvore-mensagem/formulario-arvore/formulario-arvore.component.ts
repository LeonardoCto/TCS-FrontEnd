import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EdgeGrafoDto } from 'src/app/shared/model/dto/EdgeGrafoDto';
import { InputSalvarDto } from 'src/app/shared/model/dto/InputSalvarDto';
import { MensagemSalvarDto } from 'src/app/shared/model/dto/MensagemSalvarDto';
import { NodeGrafoDto } from 'src/app/shared/model/dto/NodeGrafoDto';
import { ArvoreMensagemService } from '../arvore-mensagem.service';
import Swal from 'sweetalert2';

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
    if(form.value.novoInput && form.value.novaMensagem){
      this.arvoreMensagemService.adicionarMensagem(this.nodeSelecionada,form)
      .subscribe((resultado) => {
        this.eventoAtualizarGrafo.emit();
        form.reset();
        this.nodeSelecionada = null;
        this.desativarForms();
      },
      (err) => {
        console.log("Erro: " + err);
      });
    }
    else {
      Swal.fire({
        icon:"error",
        title:"Campos inválidos",
        text: "Os campos opção e mensagem são obrigatórios"
      })
    }
  }

  editarMensagem(form: NgForm){
    if(form.value.novoConteudo){
      this.arvoreMensagemService.editarMensagem(this.nodeSelecionada, form)
      .subscribe(() => {
        this.eventoAtualizarGrafo.emit();
        form.reset();
        this.nodeSelecionada = null;
        this.desativarForms();
      }, 
      (err) =>{ 
        console.log(err);
      });
    }
    else {
      Swal.fire({
        icon:"error",
        title:"Campo inválido",
        text: "O campo mensagem é obrigatório"
      })
    }
  }

  editarInput(form: NgForm){
    if(form.value.inputEditado){
      this.arvoreMensagemService.editarInput(this.edgeSelecionada, form)?.subscribe(()=>{
        this.eventoAtualizarGrafo.emit();
        form.reset();
        this.edgeSelecionada = null;
        this.desativarForms();
      },
      (err)=>{
        console.log(err);
      });
    }
    else {
      Swal.fire({
        icon:"error",
        title:"Campo inválido",
        text: "O campo mensagem é obrigatório"
      })
    }
  }

  deletarMensagem(node: NodeGrafoDto){
    Swal.fire({
      icon: "warning",
      title: "Aviso",
      text: "Ao deletar uma mensagen todas as opções vinculadas a ela serão deletadas, junto com suas mensagens sucessoras",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.arvoreMensagemService.deletarMensagem(node).subscribe(()=>{
          this.eventoAtualizarGrafo.emit();
          this.nodeSelecionada = null;
          this.desativarForms();
        },
        (err) => {
          console.log(err);
        });
      }
    })
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
    this.edgeSelecionada = null;
    this.desativarForms();
    this.eventoDesselecionar.emit();
  }
}
