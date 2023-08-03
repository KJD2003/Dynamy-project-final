import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerNavbarComponent } from './divider-navbar.component';

describe('DividerNavbarComponent', () => {
  let component: DividerNavbarComponent;
  let fixture: ComponentFixture<DividerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
