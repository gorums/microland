import { TestBed } from '@angular/core/testing';

import { MicrolandApplicationService } from './microland.application.service';

describe('MicrolandApplicationService', () => {
  let service: MicrolandApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrolandApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
