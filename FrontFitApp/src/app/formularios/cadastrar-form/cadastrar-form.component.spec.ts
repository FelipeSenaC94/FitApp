import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFormComponent } from './cadastrar-form.component';

describe('CadastrarFormComponent', () => {
  let component: CadastrarFormComponent;
  let fixture: ComponentFixture<CadastrarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarFormComponent]
    });
    fixture = TestBed.createComponent(CadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
