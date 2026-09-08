export type VehicleFactor = 1.5 | 2 | 4 | 6;
export type LossFormValues = {
  year: number | null;
  W: VehicleFactor | null;
  VehicleWeight: string;
};
export type LossFormErrors = Partial<Record<keyof LossFormValues, string>>;
export type TotalLossParameters = { R: number; S: number; M: number };

export const parametersByYear: Readonly<Partial<Record<number, Readonly<TotalLossParameters>>>> = {
  2024: { R: 54, S: 343.39, M: 500 },
  2025: { R: 54, S: 382.54, M: 500 },
  2026: { R: 54, S: 396.31, M: 500 },
};

export function validateLossForm(values: LossFormValues): LossFormErrors {
  const errors: LossFormErrors = {};
  const parameters = values.year === null ? undefined : parametersByYear[values.year];
  if (!parameters) errors.year = "Wybierz rok wyrejestrowania pojazdu.";
  if (values.W === null || ![1.5, 2, 4, 6].includes(values.W)) {
    errors.W = "Wybierz rodzaj pojazdu.";
  }
  const weight = Number(values.VehicleWeight);
  if (values.VehicleWeight.trim() === "") {
    errors.VehicleWeight = "Podaj masę własną pojazdu w kg.";
  } else if (!/^[0-9]+$/.test(values.VehicleWeight)) {
    errors.VehicleWeight = "Podaj masę w pełnych kilogramach — dozwolone są tylko cyfry.";
  } else if (!Number.isFinite(weight) || weight <= 0) {
    errors.VehicleWeight = "Masa własna pojazdu musi być skończoną liczbą większą od zera.";
  } else if (parameters && values.W !== null && !Number.isFinite(
    values.W * parameters.R + (2 * parameters.S * weight) / 1000 + 0.5 * parameters.M,
  )) {
    errors.VehicleWeight = "Masa własna pojazdu jest zbyt duża do obliczenia wyniku.";
  }
  return errors;
}

export function calculateLoss(values: LossFormValues): number | null {
  if (Object.keys(validateLossForm(values)).length > 0) return null;
  const parameters = values.year === null ? undefined : parametersByYear[values.year];
  if (!parameters || values.W === null) return null;
  return values.W * parameters.R +
    (2 * parameters.S * Number(values.VehicleWeight)) / 1000 + 0.5 * parameters.M;
}
