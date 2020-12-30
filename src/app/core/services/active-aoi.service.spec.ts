import { TestBed } from '@angular/core/testing';

import { ActiveAoiService } from './active-aoi.service';

describe('ActiveAoiService', () => {
  let service: ActiveAoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveAoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
