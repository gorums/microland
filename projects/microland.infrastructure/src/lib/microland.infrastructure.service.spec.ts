import { TestBed } from '@angular/core/testing';

import { MicrolandInfrastructureService } from './microland.infrastructure.service';

describe('MicrolandInfrastructureService', () => {
  let service: MicrolandInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrolandInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
