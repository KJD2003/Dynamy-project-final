import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrPersonalisedComponent } from './br-personalised.component';

describe('BrPersonalisedComponent', () => {
  let component: BrPersonalisedComponent;
  let fixture: ComponentFixture<BrPersonalisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrPersonalisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrPersonalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
