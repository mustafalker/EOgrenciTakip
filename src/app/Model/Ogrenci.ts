// src/app/Model/Ogrenci.ts

export class Ogrenci {
  ogrenciID: number;
  ad: string;
  soyad: string;
  alan: string;
  minHedef: number;
  maxHedef: number;

  constructor(
    ogrenciID: number,
    ad: string,
    soyad: string,
    alan: string,
    minHedef: number,
    maxHedef: number
  ) {
    this.ogrenciID = ogrenciID;
    this.ad = ad;
    this.soyad = soyad;
    this.alan = alan;
    this.minHedef = minHedef;
    this.maxHedef = maxHedef;
  }
}