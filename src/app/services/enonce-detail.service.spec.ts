import { TestBed } from '@angular/core/testing';

import { EnonceDetailService } from './enonce-detail.service';

describe('EnonceDetailService', () => {
  let service: EnonceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnonceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
