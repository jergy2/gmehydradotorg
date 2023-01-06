import { TestBed } from '@angular/core/testing';

import { GrowHydraService } from './grow-hydra.service';

describe('GrowHydraService', () => {
  let service: GrowHydraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowHydraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
