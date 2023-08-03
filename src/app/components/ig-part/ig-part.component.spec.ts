import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgPartComponent } from './ig-part.component';

describe('IgPartComponent', () => {
  let component: IgPartComponent;
  let fixture: ComponentFixture<IgPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
