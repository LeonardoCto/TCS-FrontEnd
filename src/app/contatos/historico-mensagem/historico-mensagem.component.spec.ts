import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMensagemComponent } from './historico-mensagem.component';

describe('HistoricoMensagemComponent', () => {
  let component: HistoricoMensagemComponent;
  let fixture: ComponentFixture<HistoricoMensagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoMensagemComponent]
    });
    fixture = TestBed.createComponent(HistoricoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
