import Regulation001Vin from "./Regulation001Vin"

export type RegulationProps = {
  id: string;
  title: string;
  startDate: string;
  endDate: string | null;
  legalActs: {
    act: {
      celexNumber: string;
      title: string;
      sourceUrl: string;
      lexUrl: string;
    };
    references: string[];
  }[];
};

export const legalActsSourceLink = {
  celex02021R0535: {
    celexNumber: "02021R0535",
    title: "Rozporządzenie wykonawcze Komisji (UE) 2021/535 z dnia 31 marca 2021 r. ustanawiające zasady stosowania rozporządzenia Parlamentu Europejskiego i Rady (UE) 2019/2144 w odniesieniu do jednolitych procedur i specyfikacji technicznych w zakresie homologacji typu pojazdów oraz układów, komponentów i oddzielnych zespołów technicznych przeznaczonych do tych pojazdów, w odniesieniu do ich ogólnych cech konstrukcyjnych i bezpieczeństwa",
    sourceUrl: "http://data.europa.eu/eli/reg_impl/2021/535/",
    lexUrl: "https://sip.lex.pl/#/act/69428946/",
  },
  celex02015R0504: {
    celexNumber: "02015R0504",
    title: "Rozporządzenie wykonawcze Komisji (UE) 2015/504 z dnia 11 marca 2015 r. w sprawie wykonania rozporządzenia Parlamentu Europejskiego i Rady (UE) nr 167/2013 w odniesieniu do wymogów administracyjnych dotyczących homologacji i nadzoru rynku pojazdów rolniczych i leśnych",
    sourceUrl: "http://data.europa.eu/eli/reg_impl/2015/504/",
    lexUrl: "https://sip.lex.pl/#/act/68511210/",
  }
}

export const legalRegulationsTable = [
  {
    id: "zdarzenie-001",
    title: "VIN dla nowych pojazdów rejestrowanych od 07.07.2026 roku",
    shortTitle: "VIN suma kontrolna",
    startDate: "2026-07-07",
    endDate: null,
    keywords: ["VIN", "cyfra kontrolna", "numer identyfikacyjny pojazdu"],
    categories: ["M1", "M2", "M3", "N1", "N2", "N3", "O1", "O2", "O3", "O4"],
    Content: Regulation001Vin,
    legalActs: [
      {
        act: legalActsSourceLink.celex02021R0535,
        references: [
          "Preambuła(10)",
          "art. 1 pkt 1",
          "rozdział V art.12 pkt 2",
          "załącznik II część 2 pkt 2.4",
        ],
      },
      {
        act: legalActsSourceLink.celex02015R0504,
        references: [
          "załącznik IV sekcja 3",
        ],
      },
    ],
  }
]

