import { TestBed } from '@angular/core/testing';

import { MufredatKonularService } from './mufredat-konular.service';

describe('MufredatKonularService', () => {
  let service: MufredatKonularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MufredatKonularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
