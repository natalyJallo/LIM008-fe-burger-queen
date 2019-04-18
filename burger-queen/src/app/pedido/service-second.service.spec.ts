import { TestBed } from '@angular/core/testing';

import { ServiceSecondService } from './service-second.service';

describe('ServiceSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSecondService = TestBed.get(ServiceSecondService);
    expect(service).toBeTruthy();
  });
});
