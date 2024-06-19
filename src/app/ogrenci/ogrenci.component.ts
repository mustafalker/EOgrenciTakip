import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OgrenciService } from '../Services/ogrenci.service';
import { Ogrenci } from '../Model/Ogrenci';
import { Alan } from '../Model/Alan';
import { DersProgrami } from '../Model/DersProgrami';

@Component({
  selector: 'app-ogrenci',
  templateUrl: './ogrenci.component.html',
  styleUrls: ['./ogrenci.component.css']
})
export class OgrenciComponent implements OnInit {
  ogrenciler: Ogrenci[] = [];
  ogrenciForm: FormGroup;
  dersProgrami: DersProgrami[] | null = null;
  alanlar: Alan[] = [];

  constructor(private ogrenciService: OgrenciService, private fb: FormBuilder) {
    this.ogrenciForm = this.fb.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      alan: ['', Validators.required],
      minHedef: ['', Validators.required],
      maxHedef: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAlanlar();
  }

  loadAlanlar(): void {
    this.ogrenciService.getAlanlar().subscribe(
      (data: Alan[]) => {
        this.alanlar = data;
      },
      (error) => {
        console.error('Alanlar yüklenirken hata oluştu', error);
      }
    );
  }

  onSubmit(): void {
    if (this.ogrenciForm.valid) {
      const alanID = this.ogrenciForm.value.alan;
      const minHedef = this.ogrenciForm.value.minHedef;
      const maxHedef = this.ogrenciForm.value.maxHedef;

      this.ogrenciService.getDersProgramlari(alanID, minHedef, maxHedef).subscribe(
        (data: DersProgrami[]) => {
          this.dersProgrami = data;
        },
        (error) => {
          console.error('Ders programı yüklenirken hata oluştu', error);
        }
      );
    } else {
      console.error('Form geçerli değil, ders programı yüklenemedi');
    }
  }
}
