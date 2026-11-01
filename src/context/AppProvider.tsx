import { useCallback, useEffect, type PropsWithChildren } from "react";
import { AppContext, type AppContextValue } from "./AppContext";
import { useLegalActApiSearchContext } from "../hooks/useLegalActApiSearchContext";
import { nameDzuTable } from "../components/Api/ApiPolishLaws/apiPolishRegulationFunction";

export function AppProvider({ children }: PropsWithChildren) {
  const pordConfig = nameDzuTable.PoRD;
  const rejestracjaConfig = nameDzuTable.RozRejestracjaPojazdow;

  const pord = useLegalActApiSearchContext(
    pordConfig.idDzU,
    pordConfig.paramsSearchTitleText,
  );

  const rozRejestracjaPojazdow = useLegalActApiSearchContext(
    rejestracjaConfig.idDzU,
    rejestracjaConfig.paramsSearchTitleText,
  );

  const loadPoRD = pord.getData;
  const loadRozRejestracjaPojazdow = rozRejestracjaPojazdow.getData;

  const refreshPoRD = useCallback(() => loadPoRD(true), [loadPoRD]);

  const refreshRozRejestracjaPojazdow = useCallback(
    () => loadRozRejestracjaPojazdow(true),
    [loadRozRejestracjaPojazdow],
  );

  useEffect(() => {
    void loadPoRD();
    void loadRozRejestracjaPojazdow();
  }, [loadPoRD, loadRozRejestracjaPojazdow]);

  const contextValue: AppContextValue = {
    pord: {
      data: pord.data,
      loading: pord.loading,
      error: pord.error,
      // load: () => pord.getData(),
      refresh: refreshPoRD,
    },
    rozRejestracjaPojazdow: {
      data: rozRejestracjaPojazdow.data,
      loading: rozRejestracjaPojazdow.loading,
      error: rozRejestracjaPojazdow.error,
      // load: () => rozRejestracjaPojazdow.getData(),
      refresh: refreshRozRejestracjaPojazdow,
    },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
