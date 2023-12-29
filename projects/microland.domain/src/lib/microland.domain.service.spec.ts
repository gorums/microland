import { TestBed } from '@angular/core/testing';

import { MicrolandDomainService } from './microland.domain.service';

describe('MicrolandDomainService', () => {
  let service: MicrolandDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrolandDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
