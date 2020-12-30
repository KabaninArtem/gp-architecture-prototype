import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticTenComponent } from './analytic-ten.component';

describe('AnalyticTenComponent', () => {
  let component: AnalyticTenComponent;
  let fixture: ComponentFixture<AnalyticTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
