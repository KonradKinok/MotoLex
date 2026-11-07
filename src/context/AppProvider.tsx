import type { PropsWithChildren } from "react";
import { AppContext, type AppContextValue } from "./AppContext";
import { useLegalActApiResourceContext } from "../hooks/useLegalActApiResourceContext";
import { nameDzuTable } from "../components/Api/ApiPolishLaws/apiPolishRegulationFunction";

export function AppProvider({ children }: PropsWithChildren) {
  const pord = useLegalActApiResourceContext(
    nameDzuTable.PoRD,
  );
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
  const rozProfesjonalnaRejestracjaDystrybucjaPtr = useLegalActApiResourceContext(
    nameDzuTable.RozProfesjonalnaRejestracjaDystrybucjaPtr,
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
  };

  const contextValue: AppContextValue = {
    ...resources,
    recentPolishLaws: Object.values(resources),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
