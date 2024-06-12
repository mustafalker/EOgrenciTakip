import { TestBed } from '@angular/core/testing';

import { OgrenciService } from './ogrenci.service';

describe('OgrenciService', () => {
  let service: OgrenciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OgrenciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
