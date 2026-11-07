import { useCallback, useRef, useState } from "react";
import { isAxiosError } from "axios";
import { type LegalActsTable, httpStatusCodes } from "../components/Api/ApiPolishLaws/apiPolishRegulationData";
import { getDzUToTable } from "../components/Api/ApiPolishLaws/apiPolishRegulationFunction";
import { useLocalStorage } from "./useLocalStorage";
import { getCurrentTimeToString, getTodayToString } from "../components/globalFunctions/globalFunctions";

type LegalActCache = {
  date: string;
  time?: string;
  data: LegalActsTable;
};

export function useLegalActApiSearchContext(
  idDzU: string,
  paramsSearchTitleText: string,
  signal?: AbortSignal,
) {
  // Uwzględnienie obu parametrów zapobiega użyciu danych
  // pobranych dla innego wyszukiwania.
  const storageKey = `legalAct:v1:${JSON.stringify([
    idDzU,
    paramsSearchTitleText,
  ])}`;

  const [storedValue, setStoredValue] = useLocalStorage<unknown>(
    null,
    storageKey,
  );

  const cache = isLegalActCache(storedValue)
    ? storedValue
    : null;

  const cacheDateRef = useRef(cache?.date ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inProgress = useRef(false);

  const getData = useCallback(async (
    force = false,
  ): Promise<void> => {
    if (signal?.aborted || inProgress.current) return;
    if (!force && cacheDateRef.current === getTodayToString()) {
      return;
    }

    inProgress.current = true;
    setLoading(true);
    setError(null);

    try {
      const result = await getDzUToTable(
        idDzU,
        paramsSearchTitleText,
        signal,
      );

      if (signal?.aborted) return;

      // Data jest zapisywana dopiero po udanym pobraniu.
      const fetchedAt = new Date();
      const nextCache = {
        date: getTodayToString(fetchedAt),
        time: getCurrentTimeToString(fetchedAt),
        data: result,
      } satisfies LegalActCache;

      cacheDateRef.current = nextCache.date;
      setStoredValue(nextCache);
    } catch (err) {
      if (signal?.aborted) return;

      const status = isAxiosError(err)
        ? err.response?.status
        : undefined;

      const errorText =
        status !== undefined
          ? getTextError(status)
          : err instanceof Error
            ? err.message
            : "Nieznany błąd";

      setError(errorText);
    } finally {
      inProgress.current = false;
      setLoading(false);
    }
  }, [
    idDzU,
    paramsSearchTitleText,
    signal,
    setStoredValue,
  ]);

  return {
    data: cache?.data ?? null,
    date: cache?.date ?? null,
    time: cache?.time ?? null,
    loading,
    error,
    getData,
  };
}

// Podstawowe sprawdzenie struktury odczytanej z localStorage.
function isLegalActCache(value: unknown): value is LegalActCache {
  return (
    typeof value === "object" &&
    value !== null &&
    "date" in value &&
    typeof value.date === "string" &&
    "data" in value &&
    Array.isArray(value.data)
  );
}



function getTextError(status: number): string {
  const statusInfo = httpStatusCodes.find(
    (item) => item.code === status,
  );

  return statusInfo
    ? `[${statusInfo.code} ${statusInfo.status}]: ${statusInfo.description}`
    : `[${status}]: Nieznany błąd`;
}
