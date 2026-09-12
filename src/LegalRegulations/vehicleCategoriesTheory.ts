export const category_M = ["M1", "M2", "M3"] as const;
export const category_N = ["N1", "N2", "N3"] as const;
export const category_O = ["O1", "O2", "O3", "O4"] as const;
export const category_L = [
  "L1e", "L2e", "L3e", "L4e", "L5e", "L6e", "L7e",
] as const;

//Kategoria T

export const category_T1 = ["T1a", "T1b"] as const satisfies readonly [string, string];
export const category_T2 = ["T2a", "T2b"] as const;
export const category_T3 = ["T3a", "T3b"] as const;
export const category_T4 = ["T4.1", "T4.2", "T4.3"] as const;
export const category_T5 = ["T5"] as const;
export const category_T = [
  ...category_T1, ...category_T2, ...category_T3, ...category_T4, ...category_T5,
] as const;

//Kategoria C
export const category_C1 = ["C1a", "C1b"] as const;
export const category_C2 = ["C2a", "C2b"] as const;
export const category_C3 = ["C3a", "C3b"] as const;
export const category_C4 = ["C4.1", "C4.2", "C4.3"] as const;
export const category_C5 = ["C5"] as const;
export const category_C = [
  ...category_C1, ...category_C2, ...category_C3, ...category_C4, ...category_C5,
] as const;

//Kategoria R
export const category_R1 = ["R1a", "R1b"] as const satisfies readonly [string, string];;
export const category_R2 = ["R2a", "R2b"] as const;
export const category_R3 = ["R3a", "R3b"] as const;
export const category_R4 = ["R4a", "R4b"] as const;
export const category_R = [
  ...category_R1, ...category_R2, ...category_R3, ...category_R4
] as const;

//Wszystkie kategorie
export const vehicleCategories = [
  ...category_M,
  ...category_N,
  ...category_O,
  ...category_L,
  ...category_T,
  ...category_C,
  ...category_R,
] as const;

export type VehicleCategory = (typeof vehicleCategories)[number];