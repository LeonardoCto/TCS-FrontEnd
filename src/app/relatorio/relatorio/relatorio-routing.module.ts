import { RelatorioComponent } from "./relatorio.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';;
import { ActivatedRoute } from '@angular/router';


const routes: Routes = [
  {path: 'tela-relatorio', component: RelatorioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
