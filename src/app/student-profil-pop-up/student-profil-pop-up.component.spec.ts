import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfilPopUpComponent } from './student-profil-pop-up.component';

describe('StudentProfilPopUpComponent', () => {
  let component: StudentProfilPopUpComponent;
  let fixture: ComponentFixture<StudentProfilPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfilPopUpComponent]
    });
    fixture = TestBed.createComponent(StudentProfilPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
