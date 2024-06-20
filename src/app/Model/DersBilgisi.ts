import { KonuBilgisi } from "./KonuBilgisi";

export interface DersBilgisi {
          dersBilgisiID: string;
          dersIsmi: string;
          konuBilgileri: KonuBilgisi[];
        }
        