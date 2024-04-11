import { Component } from '@angular/core';
import { Mensagem } from 'src/app/shared/model/entity/Mensagem';

@Component({
  selector: 'app-arvore-mensagem',
  templateUrl: './arvore-mensagem.component.html',
  styleUrls: ['./arvore-mensagem.component.scss']
})
export class ArvoreMensagemComponent {
  MensagemRoot: Mensagem | null = null;
}
