import { TestBed } from '@angular/core/testing';

import { PomiarServiceService } from './pomiar-service.service';

describe('PomiarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PomiarServiceService = TestBed.get(PomiarServiceService);
    expect(service).toBeTruthy();
  });
});
