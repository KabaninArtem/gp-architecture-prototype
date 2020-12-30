import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticEightComponent } from './analytic-eight.component';

describe('AnalyticEightComponent', () => {
  let component: AnalyticEightComponent;
  let fixture: ComponentFixture<AnalyticEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
