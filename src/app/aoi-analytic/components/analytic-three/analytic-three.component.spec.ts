import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticThreeComponent } from './analytic-three.component';

describe('AnalyticThreeComponent', () => {
  let component: AnalyticThreeComponent;
  let fixture: ComponentFixture<AnalyticThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
