import { TestBed } from '@angular/core/testing';

import { CarResolveService } from './car-resolve.service';

describe('CarResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarResolveService = TestBed.get(CarResolveService);
    expect(service).toBeTruthy();
  });
});
