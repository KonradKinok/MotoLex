import type { ComponentType } from "react";
import Regulation001Vin from "./Regulation001Vin"
import Regulation002Vin from "./Regulation002Vin";
import { legalActsSourceLink, type LegalActSource, } from "./legalActsSourceLink";
import { type VehicleCategory, category_M, category_N, category_O, category_T, category_C, category_R, } from "./vehicleCategoriesTheory";

export type LegalRegulationTable = {
  id: string;
  title: string;
  shortTitle: string;
  shortContent: string;
  startDate: string;
  endDate: string | null;
  keywords: string[];
  categories: [VehicleCategory, ...VehicleCategory[]];
  Content: ComponentType<LegalRegulationTable>;
  legalActs: {
    act: LegalActSource;
    references: string[];
  }[];
};

export const legalRegulationsTable: LegalRegulationTable[] = [
  {
    id: "zdarzenie-001",
    title: "VIN dla nowych pojazdów (kat. M, N, O) rejestrowanych od 07.07.2026 roku",
    shortTitle: "VIN suma kontrolna",
    shortContent: "Od 07.07.2026 r. organy krajowe mają odmawiać rejestracji nowych pojazdów kategorii M, N i O, jeżeli ich numer VIN nie zawiera prawidłowo obliczonej cyfry kontrolnej. VIN musi być niepowtarzalny, składać się z części WMI, VDS i VIS oraz cyfry kontrolnej, przy czym nie wolno w nim stosować liter I, O i Q",
    startDate: "2026-07-07",
    endDate: null,
    keywords: ["VIN", "cyfra kontrolna", "numer identyfikacyjny pojazdu"],
    categories: [...category_M, ...category_N, ...category_O],
    Content: Regulation001Vin,
    legalActs: [
      {
        act: legalActsSourceLink.celex02021R0535,
        references: [
          "Preambuła(10)",
          "rozdział I art. 1 pkt 1",
          "rozdział V art.12 pkt 2",
          "załącznik II część 2 sekcja A pkt 2",
          "załącznik II część 2 sekcja C pkt 2",
        ],
      },
      {
        act: legalActsSourceLink.celex02015R0504,
        references: [
          "załącznik IV sekcja 3",
        ],
      },
    ],
  },
  {
    id: "zdarzenie-002",
    title: "VIN dla pojazdów (kat. T, C, R)",
    shortTitle: "VIN (PIN)",
    shortContent: "Od 01.01.2016 r. VIN dla pojazdów kat. T, C, R musi spełniać wymogi określone w normie ISO 10261:2002 lub w normie ISO 3779: 2009. W numerze VIN można stosować litery I, O i Q",
    startDate: "2016-01-01",
    endDate: null,
    keywords: ["VIN", "PIN", "numer identyfikacyjny pojazdu"],
    categories: ["M1", "M2", ...category_T, ...category_C, ...category_R],
    Content: Regulation002Vin,
    legalActs: [
      {
        act: legalActsSourceLink.celex02015R0504,
        references: [
          "załącznik IV sekcja 3",
        ],
      },
    ],
  }
]

