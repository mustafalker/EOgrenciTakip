import { TestBed } from '@angular/core/testing';

import { MufredatDerslerService } from './mufredat-dersler.service';

describe('MufredatDerslerService', () => {
  let service: MufredatDerslerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MufredatDerslerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
