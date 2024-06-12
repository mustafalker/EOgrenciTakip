import { Component, OnInit, Input } from '@angular/core';
import { DersProgrami } from '../Model/DersProgrami';

@Component({
  selector: 'app-ders-programi',
  templateUrl: './ders-programi.component.html',
  styleUrls: ['./ders-programi.component.css']
})
export class DersProgramiComponent implements OnInit {
  @Input() dersProgramlari: DersProgrami[] = [];

  constructor() {}

  ngOnInit(): void {}
}
