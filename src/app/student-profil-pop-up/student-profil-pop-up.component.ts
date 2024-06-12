import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ogrenci } from '../Model/Ogrenci';
import { OgrenciService } from '../Services/ogrenci.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alan } from '../Model/Alan';

@Component({
  selector: 'app-student-profil-pop-up',
  templateUrl: './student-profil-pop-up.component.html',
  styleUrls: ['./student-profil-pop-up.component.css']
})
export class StudentProfilPopUpComponent implements OnInit {
  ogrenciForm: FormGroup;
  alanlar: Alan[] = [];

  constructor(
    private fb: FormBuilder,
    private ogrenciService: OgrenciService,
    public activeModal: NgbActiveModal
  ) { 
    // Formu burada başlatıyoruz
    this.ogrenciForm = this.fb.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      alan: ['', Validators.required],
      minHedef: [0, [Validators.required, Validators.min(1)]],
      maxHedef: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.getAlanlar();
  }

  getAlanlar() {
    this.ogrenciService.getAlanlar().subscribe((data: Alan[]) => {
      this.alanlar = data;
    }, (error: any) => {
      console.error('Alanlar getirilemedi', error);
    });
  }

  onSubmit() {
    if (this.ogrenciForm.valid) {
      const ogrenci: Ogrenci = this.ogrenciForm.value;
      this.ogrenciService.addOgrenci(ogrenci).subscribe(
        result => {
          console.log('Öğrenci kaydedildi', result);
          this.activeModal.close(result);
        },
        error => {
          console.error('Öğrenci kaydedilemedi', error);
        }
      );
    }
  }

  close() {
    this.activeModal.close('Close click');
  }
}
