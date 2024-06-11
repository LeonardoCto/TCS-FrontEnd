import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { Telefone } from 'src/app/shared/model/Telefone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setor-visualizacao',
  templateUrl: './setor-visualizacao.component.html',
  styleUrls: ['./setor-visualizacao.component.scss']
})

  export class SetorVisualizacaoComponent implements OnInit {
    @ViewChild('ngForm', { static: true })
    public ngForm!: NgForm;

    constructor(
      private usuarioService: UsuarioService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

    public usuario: Array<Usuario> = new Array();
     id:string;
     nome:string;
     email: string;
     senha: string;
     telefone: Telefone[];

     ngOnInit(): void {
      this.listarTodosUsuarios();
    }

    listarTodosUsuarios(): void{
     this.usuarioService.listarTodosUsuarios().subscribe(
        (response: any) => {
          this.usuario = response;
          this.router.navigate(['setores/setor-detalhe']);
        },
        (error) => {
          console.error('Erro no registro', error);
        }
      );

    }
}
