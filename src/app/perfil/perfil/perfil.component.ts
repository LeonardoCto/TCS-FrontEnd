import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { Usuario } from 'src/app/shared/model/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    numero: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.buscarUsuarioPorId(1); // Substitua 1 pelo ID do usuário que você deseja buscar
  }

  buscarUsuarioPorId(id: number): void {
    this.usuarioService.buscarUsuarioPorId(id).subscribe(
      usuario => {
        this.usuario = usuario;
        console.log('Usuário encontrado:', usuario);
      },
      error => {
        console.error('Erro ao buscar usuário:', error);
      }
    );
  }

  atualizarUsuario(): void {
    if (!this.validarEmail()) {
        Swal.fire('Email inválido', 'O email deve conter: "@ .... .com"', 'error');
        return;
    }

    this.usuarioService.atualizarUsuario(this.usuario).subscribe(
        usuarioAtualizado => {
            console.log('Usuário atualizado com sucesso:', usuarioAtualizado);
            Swal.fire('Sucesso', 'Usuário atualizado com sucesso!', 'success');
        },
        error => {
            console.error('Erro ao atualizar usuário:', error);
            Swal.fire('Erro', 'Não foi possível atualizar o usuário.', 'error');
        }
    );
}

private validarEmail(): boolean {
    return /[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(this.usuario.email);
}

}

