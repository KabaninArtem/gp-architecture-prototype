import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticFiveComponent } from './analytic-five.component';

describe('AnalyticFiveComponent', () => {
  let component: AnalyticFiveComponent;
  let fixture: ComponentFixture<AnalyticFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
