import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockieModalComponent } from './coockie-modal.component';

describe('CoockieModalComponent', () => {
  let component: CoockieModalComponent;
  let fixture: ComponentFixture<CoockieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoockieModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoockieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
