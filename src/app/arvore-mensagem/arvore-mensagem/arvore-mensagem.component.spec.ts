import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreMensagemComponent } from './arvore-mensagem.component';

describe('ArvoreMensagemComponent', () => {
  let component: ArvoreMensagemComponent;
  let fixture: ComponentFixture<ArvoreMensagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArvoreMensagemComponent]
    });
    fixture = TestBed.createComponent(ArvoreMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
