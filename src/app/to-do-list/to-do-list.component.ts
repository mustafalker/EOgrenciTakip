import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DersProgramlariService } from '../Services/ders-programları.service';
import { DersProgrami } from '../Model/DersProgrami';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  dersProgrami: DersProgrami | undefined;

  constructor(
    private route: ActivatedRoute,
    private dersProgramlariService: DersProgramlariService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dersProgramlariService.getDersProgrami(id).subscribe(
        (data: DersProgrami) => {
          console.log('API den Gelen Ders Programı Verisi:', data);
          this.dersProgrami = data;
          if (data && data.dersBilgileri) {
            console.log('Ders Bilgileri:', data.dersBilgileri);
          } else {
            console.warn('Ders Bilgileri boş veya bulunamadı.');
          }
        },
        (error) => {
          console.error('Hata:', error);
        }
      );
    } else {
      console.error('ID bulunamadı');
    }
  }

  goBack() {
    this.router.navigate(['/dersprogramlari']); 
  }
}
