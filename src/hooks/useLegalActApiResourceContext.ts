import { useCallback, useEffect } from "react";
import type { AppResource } from "../context/AppContext";
import type { LegalActsTable } from "../components/Api/ApiPolishLaws/apiPolishRegulationData";
import { useLegalActApiSearchContext } from "./useLegalActApiSearchContext";

type LegalActConfig = {
  idDzU: string;
  paramsSearchTitleText: string;
};

export function useLegalActApiResourceContext(
  config: LegalActConfig,
): AppResource<LegalActsTable> {
  const { data, date, time, loading, error, getData } =
    useLegalActApiSearchContext(config.idDzU, config.paramsSearchTitleText);

  useEffect(() => {
    void getData();
  }, [getData]);

  const refresh = useCallback(() => getData(true), [getData]);

  return { data, date, time, loading, error, refresh };
}
