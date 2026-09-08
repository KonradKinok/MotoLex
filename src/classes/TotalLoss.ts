export type TotalLossParametersTable = {
  R: number;
  S: number;
  M: number;
};

export type TotalLossW = (typeof TotalLoss.allowed_W_Values)[number];

/** Mutable calculator. Assign inputs through setters; read parameters through getters. */
export class TotalLoss {
  public static readonly allowed_W_Values = [1.5, 2, 4, 6] as const;
  public static readonly parametersByYear: Readonly<
    Partial<Record<number, Readonly<TotalLossParametersTable>>>
  > = {
      2024: { R: 54, S: 343.39, M: 500 },
      2025: { R: 54, S: 382.54, M: 500 },
      2026: { R: 54, S: 396.31, M: 500 },
    };

  private _year: number | null = null;
  private _r: number | null = null;
  private _s: number | null = null;
  private _m: number | null = null;
  private _w: TotalLossW | null = null;
  private _vehicleWeight: number | null = null;

  public get year(): number | null { return this._year; }
  public get R(): number | null { return this._r; }
  public get S(): number | null { return this._s; }
  public get M(): number | null { return this._m; }
  public get W(): TotalLossW | null { return this._w; }
  public get VehicleWeight(): string {
    return this._vehicleWeight === null ? "" : String(this._vehicleWeight);
  }

  private isAllowedW(value: number): value is TotalLossW {
    return TotalLoss.allowed_W_Values.some((allowed) => allowed === value);
  }

  public set year(year: number | null) {
    if (year === null) {
      this._year = null;
      this._r = null;
      this._s = null;
      this._m = null;
      return;
    }
    const parameters = TotalLoss.parametersByYear[year];
    if (parameters === undefined) {
      throw new Error(`Brak parametrów dla roku ${year}`);
    }
    this._year = year;
    this._r = parameters.R;
    this._s = parameters.S;
    this._m = parameters.M;
  }

  public set W(value: TotalLossW | null) {
    if (value !== null && !this.isAllowedW(value)) {
      throw new Error("W musi mieć jedną z wartości: 1,5; 2; 4; 6");
    }
    this._w = value;
  }

  public set VehicleWeight(value: string) {
    const text = value.trim();
    const weight = text === "" ? null : Number(text);
    if (weight !== null && (!Number.isFinite(weight) || weight <= 0)) {
      this._vehicleWeight = null;
      throw new Error("Masa pojazdu musi być skończoną liczbą dodatnią");
    }
    this._vehicleWeight = weight;
  }
  public result(): number {
    if (this._year === null || this._r === null || this._s === null || this._m === null) {
      throw new Error("Wybierz rok, aby ustalić parametry R, S i M.");
    }
    if (this._w === null || this._vehicleWeight === null) {
      throw new Error("Podaj wartość W i masę pojazdu");
    }
    if (!this.isAllowedW(this._w)) {
      throw new Error("W musi mieć jedną z wartości: 1,5; 2; 4; 6");
    }
    if (!Number.isFinite(this._vehicleWeight) || this._vehicleWeight <= 0) {
      throw new Error("Masa pojazdu musi być skończoną liczbą dodatnią");
    }
    const result = this._w * this._r +
      (2 * this._s * this._vehicleWeight) / 1000 + 0.5 * this._m;
    if (!Number.isFinite(result)) {
      throw new Error("Masa pojazdu jest zbyt duża do obliczenia wyniku.");
    }
    return result;
  }
}

