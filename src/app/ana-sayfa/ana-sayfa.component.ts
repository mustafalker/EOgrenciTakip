import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfilPopUpComponent } from '../student-profil-pop-up/student-profil-pop-up.component';
import { Ogrenci } from '../Model/Ogrenci';
import { DersProgrami } from '../Model/DersProgrami';
import { KonuBilgisi } from '../Model/KonuBilgisi';
import { OgrenciService } from '../Services/ogrenci.service';
import { KonuBilgisiService } from '../Services/konu-bilgisi.service';
import { DersProgramlariService } from '../Services/ders-programları.service';

@Component({
  selector: 'app-ana-sayfa',
  templateUrl: './ana-sayfa.component.html',
  styleUrls: ['./ana-sayfa.component.css']
})
export class AnaSayfaComponent implements OnInit {
  ogrencis: Ogrenci[] = [];
  dersProgramlari: DersProgrami[] = [];
  konuBilgileri: KonuBilgisi[] = [];
  displayedColumns: string[] = ['ad', 'soyad', 'alan', 'minHedef', 'maxHedef'];

  constructor(
    private keycloak: KeycloakService,
    private router: Router,
    private modalService: NgbModal,
    private ogrenciService: OgrenciService,
    private dersProgramlariService: DersProgramlariService,
    private konuBilgisiService: KonuBilgisiService
  ) { }

  ngOnInit(): void {
    this.ogrenciService.getOgrenciler().subscribe((data: Ogrenci[]) => {
      this.ogrencis = data;
    });
    
    this.dersProgramlariService.getDersProgramlari().subscribe((data: DersProgrami[]) => {
      this.dersProgramlari = data;
    });

    this.konuBilgisiService.getKonuBilgileri().subscribe((data: KonuBilgisi[]) => {
      this.konuBilgileri = data;
    });
  }

  openPopUp() {
    const modalRef = this.modalService.open(StudentProfilPopUpComponent);
    modalRef.componentInstance.ogrenci = { ad: '', soyad: '', alanID: '', hedef: 0 };
    modalRef.result.then((result) => {
      if (result === 'saved') {
        this.dersProgramlari = modalRef.componentInstance.dersProgramlari;
      }
    }).catch((error) => {
      console.error('Modal dismissed with error: ', error);
    });
  }

  logout() {
    this.keycloak.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Çıkış işlemi başarısız:', error);
    });
  }
}