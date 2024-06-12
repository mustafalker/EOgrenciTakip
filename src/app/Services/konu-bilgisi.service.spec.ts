import { TestBed } from '@angular/core/testing';

import { KonuBilgisiService } from './konu-bilgisi.service';

describe('KonuBilgisiService', () => {
  let service: KonuBilgisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonuBilgisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
