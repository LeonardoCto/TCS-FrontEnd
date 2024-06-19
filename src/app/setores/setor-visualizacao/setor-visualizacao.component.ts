import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';


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
      console.error('Nenhum usuário selecionado para adicionar ao setor.');
      return;
    }
    const idSetor = this.selectedSetorId;
    this.usuarioService.inserirUsuarioSetor(idUsuarioSelecionado, this.selectedSetorId, false).subscribe(
      () => {
        console.log('Usuário adicionado ao setor com sucesso.');
        this.carregarDados(idSetor);
      },
      error => {
        console.error('Erro ao adicionar usuário ao setor:', error);
      }
    );
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
