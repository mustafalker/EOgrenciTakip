import { TestBed } from '@angular/core/testing';

import { DersBilgisiService } from './ders-bilgisi.service';

describe('DersBilgisiService', () => {
  let service: DersBilgisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DersBilgisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
