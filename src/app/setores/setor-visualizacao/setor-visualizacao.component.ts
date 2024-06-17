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
  selectedSetorId: number = 1;
  public usuario: Array<Usuario> = new Array();
  id: string;
  nome: string;
  email: string;
  senha: string;
  numero: number;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarTodosUsuarios();
    this.getUsuariosDoSetor(this.selectedSetorId);
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
