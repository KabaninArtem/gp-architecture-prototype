import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoiNavigationComponent } from './aoi-navigation.component';

describe('AoiNavigationComponent', () => {
  let component: AoiNavigationComponent;
  let fixture: ComponentFixture<AoiNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoiNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoiNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
