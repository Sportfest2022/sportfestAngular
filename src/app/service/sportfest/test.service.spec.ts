import { TestBed } from '@angular/core/testing';

import { SportfestService } from './sportfest.service';

describe('TestService', () => {
  let service: SportfestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportfestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
