import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticTwoComponent } from './analytic-two.component';

describe('AnalyticTwoComponent', () => {
  let component: AnalyticTwoComponent;
  let fixture: ComponentFixture<AnalyticTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
