import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticFourComponent } from './analytic-four.component';

describe('AnalyticFourComponent', () => {
  let component: AnalyticFourComponent;
  let fixture: ComponentFixture<AnalyticFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
