import { TestBed } from '@angular/core/testing';

import { CorrigeDetailService } from './corrige-detail.service';

describe('CorrigeDetailService', () => {
  let service: CorrigeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrigeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
