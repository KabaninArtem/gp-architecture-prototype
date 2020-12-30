import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticControlPanelComponent } from './analytic-control-panel.component';

describe('AnalyticControlPanelComponent', () => {
  let component: AnalyticControlPanelComponent;
  let fixture: ComponentFixture<AnalyticControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
