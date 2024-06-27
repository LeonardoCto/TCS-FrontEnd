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

  //PARAMETROS PARA PEGAR USUARIOS DO SETOR SELECIONADO
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

//MERODO PARA ATUALIZAR TABELA APOS ADICIONAR USUARIO AO SETOR
  carregarDados(idSetor: number): void {
    this.getUsuariosDoSetor(idSetor);
    this.listarTodosUsuarios();
  }

  //LISTAR TODOS USUARIOS METODO
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
//ADICIONAR USUARIO AO SETOR METODO// COM VALIDAÇOES NECESSARIAS PARA USUARIO_SETOR
  adicionarUsuarioAoSetor(): void {
    const idUsuarioSelecionado = +(<HTMLSelectElement>document.getElementById('user-select')).value;
    if (!idUsuarioSelecionado) {
      Swal.fire('Erro', 'Nenhum usuário selecionado para adicionar ao setor.', 'error');
      return;
    }
    const idSetor = this.selectedSetorId;

    this.usuarioService.existsUsuarioNoSetor(idUsuarioSelecionado, idSetor).subscribe(
      exists => {
        if (exists) {
          Swal.fire('Erro', 'Usuário já está no setor.', 'error');
        } else {
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
      },
      error => {
        Swal.fire('Erro', 'Erro ao verificar se o usuário já está no setor: ' + error, 'error');
        console.error('Erro ao verificar se o usuário já está no setor:', error);
      }
    );
  }
//EXCLUIR USUARIO DO SETOR METODO
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
//LISTAR USUARIOS INSERIDOS NO SETOR METODO
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
