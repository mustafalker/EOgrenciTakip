import { Component } from '@angular/core';

import { DersProgrami } from '../Model/DersProgrami';
import { DersProgramlariService } from '../Services/ders-programları.service';

@Component({
  selector: 'app-profil-kayit',
  templateUrl: './profil-kayit.component.html',
  styleUrls: ['./profil-kayit.component.css']
})
export class ProfilKayitComponent {
  alanID: string = '';
  minHedef: number | null = null;
  maxHedef: number | null = null;
  dersProgramlari: DersProgrami[] = [];
  errorMessage: string = '';

  constructor(private dersProgramlariService: DersProgramlariService) {}

  search() {
    if (this.alanID && this.minHedef !== null && this.maxHedef !== null) {
      this.dersProgramlariService.searchDersProgramlari(this.alanID, this.minHedef, this.maxHedef)
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
}
