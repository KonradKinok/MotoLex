export const APPLICATION_NAME = "PojazdLex";
export const ROUTES = {
  home: "/",

  vehicleOwners: "/dla-wlascicieli",
  documents: "/dla-wlascicieli/dokumenty",

  employees: "/dla-pracownikow",
  homologation: "/dla-pracownikow/homologacja",
  vehicleCategories: "/dla-pracownikow/homologacja/kategorie-pojazdow",
  vehicleCategoryM1: "/dla-pracownikow/homologacja/kategorie-pojazdow/m1",
  vehicleCategoryM2: "/dla-pracownikow/homologacja/kategorie-pojazdow/m2",
  vehicleCategoryM3: "/dla-pracownikow/homologacja/kategorie-pojazdow/m3",


  calculator: "/kalkulator",
  penaltiesCalculator: "/kalkulator/kary",
  vinCalculator: "/kalkulator/vin",
  permanentLossCalculator: "/kalkulator/trwala-utrata",

  penalties: "/kary",
  legalRegulations: "/przepisy-prawne",
} as const;

export const PUBLIC_ROUTES = Object.values(ROUTES);