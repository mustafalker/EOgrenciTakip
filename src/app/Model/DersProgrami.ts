import { Alan } from "./Alan";
import { DersBilgisi } from "./DersBilgisi";

export interface DersProgrami {
  dersProgramiID: string;
  minHedef: number;
  maxHedef: number;
  gunlukCalismaSaati: number;
  haftadaCalisilacakGunSayisi: number;
  alanID: string;
  alan: Alan;
  dersBilgileri: DersBilgisi[];
}
