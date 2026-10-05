
export type Route = (typeof ROUTES)[keyof typeof ROUTES];
export const APPLICATION_NAME = "PojazdLex";
export const ROUTES = {
  home: "/",

  vehicleOwners: "/dla-wlascicieli",
  documents: "/dla-wlascicieli/dokumenty",

  employees: "/dla-pracownikow",
  homologation: "/dla-pracownikow/homologacja",
  vehicleCategories: "/dla-pracownikow/homologacja/kategorie-pojazdow",
  legalRegulations: "/dla-pracownikow/homologacja/przepisy-prawne",

  calculator: "/kalkulator",
  penaltiesCalculator: "/kalkulator/kary",
  vinCalculator: "/kalkulator/vin",
  permanentLossCalculator: "/kalkulator/trwala-utrata",
  administrativeDeadlines: "/kalkulator/terminy-administracyjne",

  penalties: "/kary",
  privacyPolicy: "/polityka-prywatnosci",

} as const;

export const PUBLIC_ROUTES = Object.values(ROUTES);
