import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArvoreComponent } from './formulario-arvore.component';

describe('FormularioArvoreComponent', () => {
  let component: FormularioArvoreComponent;
  let fixture: ComponentFixture<FormularioArvoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioArvoreComponent]
    });
    fixture = TestBed.createComponent(FormularioArvoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
