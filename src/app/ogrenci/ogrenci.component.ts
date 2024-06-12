import { Component, OnInit } from '@angular/core';
import { OgrenciService } from '../Services/ogrenci.service';


@Component({
  selector: 'app-ogrenci',
  templateUrl: './ogrenci.component.html',
  styleUrls: ['./ogrenci.component.css']
})
export class OgrenciComponent implements OnInit {
  ogrenciler: any[] = [];

  constructor(private ogrenciService: OgrenciService) {}

  ngOnInit(): void {
  }
}
