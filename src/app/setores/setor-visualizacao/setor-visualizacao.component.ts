import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-setor-visualizacao',
  templateUrl: './setor-visualizacao.component.html',
  styleUrls: ['./setor-visualizacao.component.scss']
})
export class SetorVisualizacaoComponent implements OnInit {
  @ViewChild('ngForm', { static: true })
  public ngForm!: NgForm;

  usuariosDoSetor: Usuario[] = [];
  selectedSetorId!: number;
  public usuario: Array<Usuario> = new Array();
  //novoUsuario: Usuario = new Usuario();
  id!: string;
  nome!: string;
  email!: string;
  senha!: string;
  numero!: number;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.selectedSetorId = +id;
        this.getUsuariosDoSetor(this.selectedSetorId);
      } else {
        console.error('Erro: ID do setor não encontrado na rota');
      }
    });

    this.listarTodosUsuarios();
  }


  carregarDados(idSetor: number): void {
    this.getUsuariosDoSetor(idSetor);
    this.listarTodosUsuarios();
  }

  listarTodosUsuarios(): void {
    this.usuarioService.listarTodosUsuarios().subscribe(
      (response: Usuario[]) => {
        this.usuario = response;
      },
      (error) => {
        console.error('Erro ao listar todos os usuários', error);
      }
    );
  }

  adicionarUsuarioAoSetor(): void {
    const idUsuarioSelecionado = +(<HTMLSelectElement>document.getElementById('user-select')).value;
    if (!idUsuarioSelecionado) {
      Swal.fire('Erro', 'Nenhum usuário selecionado para adicionar ao setor.', 'error');
      return;
    }
    const idSetor = this.selectedSetorId;
    this.usuarioService.inserirUsuarioSetor(idUsuarioSelecionado, idSetor, false).subscribe(
      () => {
        Swal.fire('Sucesso', 'Usuário adicionado ao setor com sucesso.', 'success');
        this.carregarDados(idSetor);
      },
      error => {
        Swal.fire('Erro', 'Erro ao adicionar usuário ao setor: ' + error, 'error');
        console.error('Erro ao adicionar usuário ao setor:', error);
      }
    );
  }

  excluirUsuarioDoSetor(idUsuario: number): void {
    const idSetor = this.selectedSetorId;
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação irá remover o usuário do setor.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Se o usuário confirmar, proceder com a exclusão
        this.usuarioService.excluirUsuarioDoSetor(idUsuario, idSetor).subscribe(
          () => {
            Swal.fire('Sucesso', 'Usuário removido do setor com sucesso.', 'success');
            this.carregarDados(idSetor);
            
          },
          error => {
            Swal.fire('Erro', 'Erro ao remover usuário do setor: ' + error, 'error');
            console.error('Erro ao remover usuário do setor:', error);
          }
        );
      }
    });
  }

  getUsuariosDoSetor(idSetor: number): void {
    this.usuarioService.listarUsuariosSetor(idSetor).subscribe(
      (usuarios: Usuario[]) => {
        this.usuariosDoSetor = usuarios;
      },
      (error) => {
        console.error('Erro ao listar usuários do setor', error);
      }
    );
  }
}
