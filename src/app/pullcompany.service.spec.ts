import { TestBed } from '@angular/core/testing';

import { PullcompanyService } from './pullcompany.service';

describe('PullcompanyService', () => {
  let service: PullcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
