import { TestBed } from '@angular/core/testing';

import { ArvoreMensagemService } from './arvore-mensagem.service';

describe('ArvoreMensagemService', () => {
  let service: ArvoreMensagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArvoreMensagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
