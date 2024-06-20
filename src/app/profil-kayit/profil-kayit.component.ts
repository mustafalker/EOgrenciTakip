import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and Validators
import { Router } from '@angular/router'; // Import Router for navigation
import { DersProgrami } from '../Model/DersProgrami';
import { DersProgramlariService } from '../Services/ders-programları.service';

@Component({
  selector: 'app-profil-kayit',
  templateUrl: './profil-kayit.component.html',
  styleUrls: ['./profil-kayit.component.css']
})
export class ProfilKayitComponent {
  searchForm: FormGroup;
  alanID: string = '';
  minHedef: number | null = null;
  maxHedef: number | null = null;
  dersProgramlari: DersProgrami[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private dersProgramlariService: DersProgramlariService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      alanID: ['', Validators.required],
      minHedef: [null, [Validators.required, Validators.min(0)]],
      maxHedef: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() { }

  search() {
    if (this.searchForm.valid) {
      const { alanID, minHedef, maxHedef } = this.searchForm.value;
      this.dersProgramlariService.searchDersProgramlari(alanID, minHedef, maxHedef)
        .subscribe(
          (data) => {
            this.dersProgramlari = data;
            this.errorMessage = '';
          },
          (error) => {
            this.errorMessage = error.message;
          }
        );
    } else {
      this.errorMessage = 'Lütfen tüm alanları doldurun.';
    }
  }

  goBack() {
    this.router.navigate(['/ana-sayfa']); 
  }
}