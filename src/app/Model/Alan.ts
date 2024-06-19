// src/app/Model/Alan.ts

export class Alan {
  alanID: string;
  ad: string;
  aciklama: string;

  constructor(
    alanID: string,
    ad: string,
    aciklama: string
  ) {
    this.alanID = alanID;
    this.ad = ad;
    this.aciklama = aciklama;
  }
}