import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoiAnalyticComponent } from './aoi-analytic.component';

describe('AoiAnalyticComponent', () => {
  let component: AoiAnalyticComponent;
  let fixture: ComponentFixture<AoiAnalyticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoiAnalyticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoiAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
