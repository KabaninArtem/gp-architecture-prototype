import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticSevenComponent } from './analytic-seven.component';

describe('AnalyticSevenComponent', () => {
  let component: AnalyticSevenComponent;
  let fixture: ComponentFixture<AnalyticSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
