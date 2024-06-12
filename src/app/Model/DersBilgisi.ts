import { DersProgrami } from "./DersProgrami";
import { KonuBilgisi } from "./KonuBilgisi";

export interface DersBilgisi {
          dersProgramiID: string;
          haftadaDerseAyrilanSure: number;
          ay: number;
          hafta: string;
          konuBilgisiID: string;
          dersProgrami: DersProgrami;
          konuBilgisi: KonuBilgisi;
}
        