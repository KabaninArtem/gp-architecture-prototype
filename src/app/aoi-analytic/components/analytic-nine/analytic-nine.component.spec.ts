import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticNineComponent } from './analytic-nine.component';

describe('AnalyticNineComponent', () => {
  let component: AnalyticNineComponent;
  let fixture: ComponentFixture<AnalyticNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
