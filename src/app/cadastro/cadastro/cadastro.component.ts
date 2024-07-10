import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroDTO } from 'src/app/shared/model/CadastroDTO';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  public nome: string;
  public telefone: string;
  public email: string;
  public senha: string;
  public senhaConfirmada: string;

  constructor(private usuarioService: UsuarioService, 
    private router: Router){}

  cadastrar(){
    if(!this.nome || !this.email || !this.telefone || !this.senha || !this.senhaConfirmada) {
      Swal.fire({
        icon: "error",
        title: "Campos inválidos",
        text: "Todos os campos são obrigatórios"
      })
    }
    else if(this.telefone.length != 13){
      Swal.fire({
        icon: "error",
        title: "Telefone inválido",
        text: "O telefone deve conter o código do pais, código de área e o numero em si, exemplo: 5548999998888"
      })
    }
    else if(this.senha != this.senhaConfirmada) {
      Swal.fire({
        icon: "error",
        title: "Senha inválida",
        text: "As senhas digitadas não são iguais"
      })
    }
    else if(!this.validarEmail(this.email)){
      Swal.fire('Email inválido', 'O email deve conter: "@ .... .com"', 'error');
    }
    else {
        let cadastroDTO: CadastroDTO = new CadastroDTO();
        cadastroDTO.nome = this.nome;
        cadastroDTO.email = this.email;
        cadastroDTO.telefone = this.telefone;
        cadastroDTO.senha = this.senha;
        cadastroDTO.senhaConfirmada = this.senhaConfirmada;
    
    
        console.log(cadastroDTO);
        this.usuarioService.cadastro(cadastroDTO).subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/login/tela-login']);
          },
          (error) => {
            console.error('Erro de login:', error);
    
          }
        );
      }
    }
  private validarEmail(email: string): boolean {
      return /[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(email);
  }
}
