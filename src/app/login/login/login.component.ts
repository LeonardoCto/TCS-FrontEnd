import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/shared/model/LoginDTO';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('ngForm', { static: true })
  public ngForm!: NgForm;

  email: string;
  senha: string;

  mostrarSenha: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute)
     {}

//metodo de login
     login(): void {
      this.usuarioService.login({ login: this.email, senha: this.senha }).subscribe(
        (response) => {
         this.usuarioService.armazenarTokenJWT(response.token);
          this.router.navigate(['/home/tela-principal']);
        },
        (error) => {
          console.error('Erro de login:', error);

        }
      );
    }

  enviarParaCadastro(): void {
    this.router.navigate(['/cadastro/tela-cadastro']);
  }
}
