import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologicoComponent } from './ecologico.component';

describe('EcologicoComponent', () => {
  let component: EcologicoComponent;
  let fixture: ComponentFixture<EcologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcologicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
