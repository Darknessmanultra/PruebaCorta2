import { TestBed } from '@angular/core/testing';

import { PC2Service } from './pc2.service';

describe('PC2Service', () => {
  let service: PC2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PC2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
