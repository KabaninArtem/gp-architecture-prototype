import { TestBed } from '@angular/core/testing';

import { ActiveAoiAnalyticService } from './active-aoi-analytic.service';

describe('ActiveAoiAnalyticService', () => {
  let service: ActiveAoiAnalyticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveAoiAnalyticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
