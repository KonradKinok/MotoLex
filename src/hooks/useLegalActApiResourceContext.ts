import { useCallback, useEffect } from "react";
import type { AppResource } from "../context/AppContext";
import type { LegalActsTable } from "../components/Api/ApiPolishLaws/apiPolishRegulationData";
import { useLegalActApiSearchContext } from "./useLegalActApiSearchContext";
import { useLegalActApiSearchTitleContext } from "./useLegalActApiSearchTitleContext";

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

type LegalActConfigByTitle = {
  paramsSearchTitleType: string;
  paramsSearchDateFrom: string;
  paramsSearchTitleText: string;
  paramsSearchLimits: string;
};

//Hook do pobierania aktów prawnych w oparciu o parametry wyszukiwania według tytułu oraz zarządzania stanem zasobu.
export function useLegalActApiResourceContextByTitle(
  config: LegalActConfigByTitle,
): AppResource<LegalActsTable> {
  const { data, date, time, loading, error, getData } =
    useLegalActApiSearchTitleContext(config.paramsSearchTitleType, config.paramsSearchDateFrom, config.paramsSearchTitleText, config.paramsSearchLimits);

  useEffect(() => {
    void getData();
  }, [getData]);

  const refresh = useCallback(() => getData(true), [getData]);

  return { data, date, time, loading, error, refresh };
}
