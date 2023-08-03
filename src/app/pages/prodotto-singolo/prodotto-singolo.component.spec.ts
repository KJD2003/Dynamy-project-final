import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoSingoloComponent } from './prodotto-singolo.component';

describe('ProdottoSingoloComponent', () => {
  let component: ProdottoSingoloComponent;
  let fixture: ComponentFixture<ProdottoSingoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoSingoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
