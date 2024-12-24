import { TestBed } from '@angular/core/testing';

import { ChapitreDetailService } from './chapitre-detail.service';

describe('ChapitreDetailService', () => {
  let service: ChapitreDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapitreDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
