import { DersBilgisi } from "./DersBilgisi";


export interface KonuBilgisi {
  konuBilgisiID: string;
  konuIsmi: string;
  dersBilgileri: DersBilgisi[];
}
