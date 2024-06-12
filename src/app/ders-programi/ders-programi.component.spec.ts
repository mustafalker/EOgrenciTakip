import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersProgramiComponent } from './ders-programi.component';

describe('DersProgramiComponent', () => {
  let component: DersProgramiComponent;
  let fixture: ComponentFixture<DersProgramiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DersProgramiComponent]
    });
    fixture = TestBed.createComponent(DersProgramiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
