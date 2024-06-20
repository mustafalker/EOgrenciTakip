import { Component, OnInit, Input } from '@angular/core';
import { DersProgrami } from '../Model/DersProgrami';

import { Router } from '@angular/router';
import { DersProgramlariService } from '../Services/ders-programları.service';

@Component({
  selector: 'app-ders-programi',
  templateUrl: './ders-programi.component.html',
  styleUrls: ['./ders-programi.component.css']
})
export class DersProgramiComponent implements OnInit {
  alanID: string = '';
  minHedef: number = 0;
  maxHedef: number = 0;
  errorMessage: string = '';
  @Input() dersProgramlari: DersProgrami[] = [];
  constructor(private dersProgramlariService: DersProgramlariService, private router: Router) { }

  search() {
    this.dersProgramlariService.searchDersProgramlari(this.alanID, this.minHedef, this.maxHedef).subscribe(
      (data: DersProgrami[]) => {
        this.dersProgramlari = data;
      },
      (error) => {
        this.errorMessage = 'Bir hata oluştu, lütfen tekrar deneyin.';
      }
    );
  }

  onSelect(program: DersProgrami) {
    this.router.navigate(['/to-do-list', program.dersProgramiID]);
  }

  ngOnInit(): void {}
}
