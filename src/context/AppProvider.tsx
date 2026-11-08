import type { PropsWithChildren } from "react";
import { AppContext, type AppContextValue } from "./AppContext";
import {
  useLegalActApiResourceContext,
  useLegalActApiResourceContextByTitle,
} from "../hooks/useLegalActApiResourceContext";
import {
  nameDzuTable,
  nameDzuTableByTitle,
} from "../components/Api/ApiPolishLaws/apiPolishRegulationFunction";

export function AppProvider({ children }: PropsWithChildren) {
  const pord = useLegalActApiResourceContext(nameDzuTable.PoRD);
  const rozRejestracjaPojazdow = useLegalActApiResourceContext(
    nameDzuTable.RozRejestracjaPojazdow,
  );
  const rozSzczegoloweCzynnosci = useLegalActApiResourceContext(
    nameDzuTable.RozSzczegoloweCzynnosci,
  );
  const rozOplatyZaDrPcTr = useLegalActApiResourceContext(
    nameDzuTable.RozOplatyZaDrPcTr,
  );
  const rozTrybLegalizacjiTrWzoryZl = useLegalActApiResourceContext(
    nameDzuTable.RozTrybLegalizacjiTrWzoryZl,
  );
  const rozProdukcjaDystrybucjaTr = useLegalActApiResourceContext(
    nameDzuTable.RozProdukcjaDystrybucjaTr,
  );
  const rozCzasoweWycofanie = useLegalActApiResourceContext(
    nameDzuTable.RozCzasoweWycofanie,
  );
  const rozNadawanieCechIdentyfikacyjnych = useLegalActApiResourceContext(
    nameDzuTable.RozNadawanieCechIdentyfikacyjnych,
  );
  const rozWzorOplataTrwalaUtrata = useLegalActApiResourceContext(
    nameDzuTable.RozWzorOplataTrwalaUtrata,
  );
  const rozProfesjonalnaRejestracja = useLegalActApiResourceContext(
    nameDzuTable.RozProfesjonalnaRejestracja,
  );
  const rozProfesjonalnaRejestracjaDystrybucjaPtr =
    useLegalActApiResourceContext(
      nameDzuTable.RozProfesjonalnaRejestracjaDystrybucjaPtr,
    );
  const rozStawkaOplatZaSrodowisko = useLegalActApiResourceContext(
    nameDzuTable.RozStawkaOplatZaSrodowisko,
  );
  const kpw = useLegalActApiResourceContext(nameDzuTable.Kpw);
  //Obwieszczenia
  const obwProfesjonalnaRejestracja = useLegalActApiResourceContextByTitle(
    nameDzuTableByTitle.ObwieszczenieProfesjonalnaRejestracja,
  );
  const obwOplatyTrwalaUtrata = useLegalActApiResourceContextByTitle(
    nameDzuTableByTitle.ObwieszczenieTrwalaUtrata,
  );
  const resources = {
    pord,
    rozRejestracjaPojazdow,
    rozSzczegoloweCzynnosci,
    rozOplatyZaDrPcTr,
    rozTrybLegalizacjiTrWzoryZl,
    rozProdukcjaDystrybucjaTr,
    rozCzasoweWycofanie,
    rozNadawanieCechIdentyfikacyjnych,
    rozWzorOplataTrwalaUtrata,
    rozProfesjonalnaRejestracja,
    rozProfesjonalnaRejestracjaDystrybucjaPtr,
    rozStawkaOplatZaSrodowisko,
    kpw,
    //Obwieszczenia
    obwProfesjonalnaRejestracja,
    obwOplatyTrwalaUtrata,
  };

  const contextValue: AppContextValue = {
    ...resources,
    recentPolishLaws: Object.values(resources),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
