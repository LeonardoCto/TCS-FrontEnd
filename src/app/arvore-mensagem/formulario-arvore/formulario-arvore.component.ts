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

  validarMensagemAdicao(form: NgForm){
    let mensagemErro: string = "";
    if(form.value.novaMensagem.length > 255){
      mensagemErro += "Conteudo mensagem excede limite de 255 caracteres\n"
    }
    if(form.value.novoInput.length > 50){
      mensagemErro += "Conteudo da opção excede limite de 50 caracteres\n"
    }
    return mensagemErro;
  }

  validarMensagemEdicao(form: NgForm){
    let mensagemErro: string = "";
    if(form.value.novoConteudo.length > 255){
      mensagemErro += "Conteudo da mensagem excede limite de 255 caracteres\n"
    }
    return mensagemErro;
  }

  validarOpcaoEdicao(form: NgForm){
    let mensagemErro: string = "";
    if(form.value.inputEditado.length > 50){
      mensagemErro += "Conteudo da opção excede limite de 50 caracteres\n"
    }
    return mensagemErro;
  }
  
  adicionarMensagem(form: NgForm){
    if(form.value.novoInput && form.value.novaMensagem){
      let mensagemErro: string = this.validarMensagemAdicao(form);
      if(mensagemErro != ""){
        Swal.fire({
          icon:"error",
          title:"Campos inválidos",
          text: mensagemErro
        });
      }
      else {
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
    }
    else {
      Swal.fire({
        icon:"error",
        title:"Campos inválidos",
        text: "Os campos opção e mensagem são obrigatórios"
      })
    }
  }

  verificarNodeSelecionadaRaiz(){
    let nodeEncontrada = this.arestas.find((element) => element.target == this.nodeSelecionada?.id)
    if(nodeEncontrada == null || nodeEncontrada == undefined){
      return true;
    }
    return false;
  }

  editarMensagem(form: NgForm){
    if(form.value.novoConteudo){
      let mensagemErro: string = this.validarMensagemEdicao(form);
      console.log("chegou aqui");
      if(mensagemErro != ""){
        Swal.fire({
          icon:"error",
          title:"Campo inválido",
          text: mensagemErro
        });
      }
      else {
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
      let mensagemErro: string = this.validarOpcaoEdicao(form);
      if(mensagemErro != ""){
        Swal.fire({
          icon:"error",
          title:"Campo inválido",
          text: mensagemErro
        });
      }
      else {
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
