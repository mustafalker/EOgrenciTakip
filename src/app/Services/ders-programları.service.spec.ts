import { TestBed } from '@angular/core/testing';
import { DersProgramlariService } from './ders-programları.service';



describe('DersProgramlarıService', () => {
  let service: DersProgramlariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DersProgramlariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
