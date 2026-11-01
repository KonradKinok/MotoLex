import { createContext } from "react";
import type {
  LegalActsTable,
} from "../components/Api/ApiPolishLaws/apiPolishRegulationData";

export type AppResource<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  // load: () => Promise<void>;
  refresh: () => Promise<void>;
};

export type AppContextValue = {
  pord: AppResource<LegalActsTable>;
  rozRejestracjaPojazdow: AppResource<LegalActsTable>;

  // Tutaj możesz później dodać inne dane aplikacji.
};

export const AppContext =
  createContext<AppContextValue | undefined>(undefined);