export const ROUTES = {
  home: "/",

  vehicleOwners: "/dla-wlascicieli",
  documents: "/dla-wlascicieli/dokumenty",

  employees: "/dla-pracownikow",
  homologation: "/dla-pracownikow/homologacja",

  calculator: "/kalkulator",
  penaltiesCalculator: "/kalkulator/kary",
  vinCalculator: "/kalkulator/vin",
  permanentLossCalculator: "/kalkulator/trwala-utrata",

  penalties: "/kary",
  legalRegulations: "/przepisy-prawne",
} as const;

export const PUBLIC_ROUTES = Object.values(ROUTES);