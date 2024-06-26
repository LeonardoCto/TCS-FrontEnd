import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroDTO } from 'src/app/shared/model/CadastroDTO';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

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
    let cadastroDTO: CadastroDTO = new CadastroDTO();
    cadastroDTO.nome = this.nome;
    cadastroDTO.email = this.email;
    cadastroDTO.telefone = this.telefone;
    cadastroDTO.senha = this.senha;
    cadastroDTO.senhaConfirmada = this.senhaConfirmada;

    console.log(cadastroDTO);
    this.usuarioService.cadastro(cadastroDTO).subscribe(
      (response) => {
         this.router.navigate(['/login/tela-login']);
       },
       (error) => {
         console.error('Erro de login:', error);

       }
    );
  }
}
