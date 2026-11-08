import { createContext } from "react";
import type {
  LegalActsTable,
} from "../components/Api/ApiPolishLaws/apiPolishRegulationData";

export type AppResource<T> = {
  data: T | null;
  date: string | null;
  time: string | null;
  loading: boolean;
  error: string | null;
  // load: () => Promise<void>;
  refresh: () => Promise<void>;
};

export type AppContextValue = {
  pord: AppResource<LegalActsTable>;
  rozRejestracjaPojazdow: AppResource<LegalActsTable>;
  rozSzczegoloweCzynnosci: AppResource<LegalActsTable>;
  rozOplatyZaDrPcTr: AppResource<LegalActsTable>;
  rozTrybLegalizacjiTrWzoryZl: AppResource<LegalActsTable>;
  rozProdukcjaDystrybucjaTr: AppResource<LegalActsTable>;
  rozCzasoweWycofanie: AppResource<LegalActsTable>;
  rozNadawanieCechIdentyfikacyjnych: AppResource<LegalActsTable>;
  rozWzorOplataTrwalaUtrata: AppResource<LegalActsTable>;
  rozProfesjonalnaRejestracja: AppResource<LegalActsTable>;
  rozProfesjonalnaRejestracjaDystrybucjaPtr: AppResource<LegalActsTable>;
  //Obwieszczenia
  obwProfesjonalnaRejestracja: AppResource<LegalActsTable>;
  obwOplatyTrwalaUtrata: AppResource<LegalActsTable>;
  // Tablica ostatnich aktów prawnych.
  recentPolishLaws: AppResource<LegalActsTable>[];

  // Tutaj możesz później dodać inne dane aplikacji.
};

export const AppContext =
  createContext<AppContextValue | undefined>(undefined);