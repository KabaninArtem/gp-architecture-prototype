import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticOneComponent } from './analytic-one.component';

describe('AnalyticOneComponent', () => {
  let component: AnalyticOneComponent;
  let fixture: ComponentFixture<AnalyticOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
