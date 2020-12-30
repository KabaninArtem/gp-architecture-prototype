import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticSixComponent } from './analytic-six.component';

describe('AnalyticSixComponent', () => {
  let component: AnalyticSixComponent;
  let fixture: ComponentFixture<AnalyticSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
