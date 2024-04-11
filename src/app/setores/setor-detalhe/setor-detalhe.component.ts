import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from 'src/app/shared/model/Setor';
import { SetorService } from 'src/app/shared/service/setor.service';

@Component({
  selector: 'app-setor-detalhe',
  templateUrl: './setor-detalhe.component.html',
  styleUrls: ['./setor-detalhe.component.scss']
})
export class SetorDetalheComponent implements OnInit {
    ngOnInit(): void {
        
    }

  public idSetor: number;
  public setor: Setor = new Setor();
  public nome: string[];

  @ViewChild('ngForm', { static: true }) // Make sure to specify static flag
  public ngForm!: NgForm;

  constructor(private setorService: SetorService,
              private router: Router,
              private route: ActivatedRoute) { }

 
}