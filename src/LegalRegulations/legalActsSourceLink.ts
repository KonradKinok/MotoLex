import { category_C, category_M, category_N, category_O, category_R, category_T, type VehicleCategory } from "./vehicleCategoriesTheory";

export type LegalActSource = {
  celexNumber: string;
  title: string;
  sourceUrl: string;
  lexUrl: string;
  categories: [VehicleCategory, ...VehicleCategory[]];
};

export const legalActsSourceLink = {
  celex02021R0535: {
    celexNumber: "02021R0535",
    title: "Rozporządzenie wykonawcze Komisji (UE) 2021/535 z dnia 31 marca 2021 r. ustanawiające zasady stosowania rozporządzenia Parlamentu Europejskiego i Rady (UE) 2019/2144 w odniesieniu do jednolitych procedur i specyfikacji technicznych w zakresie homologacji typu pojazdów oraz układów, komponentów i oddzielnych zespołów technicznych przeznaczonych do tych pojazdów, w odniesieniu do ich ogólnych cech konstrukcyjnych i bezpieczeństwa",
    sourceUrl: "http://data.europa.eu/eli/reg_impl/2021/535/",
    lexUrl: "https://sip.lex.pl/#/act/69428946/",
    categories: [...category_M, ...category_N, ...category_O],
  },
  celex02015R0504: {
    celexNumber: "02015R0504",
    title: "Rozporządzenie wykonawcze Komisji (UE) 2015/504 z dnia 11 marca 2015 r. w sprawie wykonania rozporządzenia Parlamentu Europejskiego i Rady (UE) nr 167/2013 w odniesieniu do wymogów administracyjnych dotyczących homologacji i nadzoru rynku pojazdów rolniczych i leśnych",
    sourceUrl: "http://data.europa.eu/eli/reg_impl/2015/504/",
    lexUrl: "https://sip.lex.pl/#/act/68511210/",
    categories: [...category_T, ...category_C, ...category_R],
  },
  celex02013R0167: {
    celexNumber: "02013R0167",
    title: "Rozporządzenie Parlamentu Europejskiego i Rady (UE) nr 167/2013 z dnia 5 lutego 2013 r. w sprawie homologacji i nadzoru rynku pojazdów rolniczych i leśnych",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2013/167/",
    lexUrl: "https://sip.lex.pl/#/act/68293683/",
    categories: [...category_T, ...category_C, ...category_R],
  }
} satisfies Record<string, LegalActSource>;