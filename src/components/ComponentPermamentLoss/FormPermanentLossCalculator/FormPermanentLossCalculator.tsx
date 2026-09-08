import { useId, useState, type ChangeEvent, type SubmitEvent } from "react";
import Select, { type ActionMeta, type SingleValue } from "react-select";
import {
  Scooter,
  Motorbike,
  Car,
  Van,
  CalendarCheck,
  Calculator,
} from "lucide-react";
import { formatCurrency } from "../../globalFunctions/globalFunctions";
import { FieldsetCustom } from "../../CustomControls/FieldsetCustom/FieldsetCustom";
import { SingleInput } from "../../CustomControls/SingleInput/SingleInput";
import { ButtonUniversal } from "../../CustomControls/ButtonUniversal/ButtonUniversal";
import {
  createComboBoxStyles,
  formatComboBoxOption,
  type ComboBoxOption,
} from "../../CustomControls/ComboBox/ComboBox";
import {
  calculateLoss,
  parametersByYear,
  validateLossForm,
  type LossFormValues,
  type VehicleFactor,
} from "./permanentLossForm";
import styles from "./FormPermanentLossCalculator.module.scss";

const comboBoxStylesW = createComboBoxStyles<VehicleFactor>();
const comboBoxOptionsW: ComboBoxOption<VehicleFactor>[] = [
  { label: "motorowery", value: 1.5, icon: <Scooter size={20} /> },
  { label: "motocykle i przyczepy", value: 2, icon: <Motorbike size={20} /> },
  {
    label:
      "ciągniki rolnicze i pojazdy samochodowe o masie własnej nie przekraczającej 3,5 tony",
    value: 4,
    icon: <Car size={20} />,
  },
  {
    label: "pojazdy samochodowe o masie własnej przekraczającej 3,5 tony",
    value: 6,
    icon: <Van size={20} />,
  },
];

const comboBoxStylesYear = createComboBoxStyles<number>();
const comboBoxOptionsYear: ComboBoxOption<number>[] = Object.keys(
  parametersByYear,
)
  .sort((a, b) => Number(b) - Number(a))
  .map((year) => ({
    label: year,
    value: Number(year),
    icon: <CalendarCheck size={20} />,
  }));
type FieldChange = {
  [Field in keyof LossFormValues]: {
    name: Field;
    value: LossFormValues[Field];
  };
}[keyof LossFormValues];

export function FormPermanentLossCalculator() {
  const id = useId();
  const [values, setValues] = useState<LossFormValues>({
    year: null,
    W: null,
    VehicleWeight: "",
  });
  const [touched, setTouched] = useState<Record<keyof LossFormValues, boolean>>(
    {
      year: false,
      W: false,
      VehicleWeight: false,
    },
  );
  const [result, setResult] = useState<number | null>(null);
  const errors = validateLossForm(values);
  const parameters =
    values.year === null ? undefined : parametersByYear[values.year];
  const yearError = touched.year ? errors.year : undefined;
  const weightError = touched.VehicleWeight ? errors.VehicleWeight : undefined;
  const vehicleError = touched.W ? errors.W : undefined;

  function updateField(change: FieldChange): void {
    setValues((previous) => ({ ...previous, [change.name]: change.value }));
    setResult(null);
  }

  function handleChange(
    input: ChangeEvent<HTMLInputElement> | SingleValue<ComboBoxOption<number>>,
    meta?: ActionMeta<ComboBoxOption<number>>,
  ): void {
    if (input !== null && "target" in input) {
      const { name, value } = input.target;
      if (name === "VehicleWeight" && /^[0-9]*$/.test(value)) {
        updateField({ name, value });
      }
      return;
    }

    const name = meta?.name;
    const value = input?.value ?? null;

    if (name === "year") {
      updateField({ name, value });
    } else if (
      name === "W" &&
      (value === null ||
        value === 1.5 ||
        value === 2 ||
        value === 4 ||
        value === 6)
    ) {
      updateField({ name, value });
    }
  }

  function handleBlur(name: keyof LossFormValues): void {
    setTouched((previous) => ({ ...previous, [name]: true }));
  }

  function handleClear(input: HTMLInputElement): void {
    const { name } = input;
    if (name === "VehicleWeight") {
      updateField({ name, value: "" });
      handleBlur(name);
    }
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    setTouched({ year: true, W: true, VehicleWeight: true });
    setResult(calculateLoss(values));
    if (Object.keys(errors).length > 0) {
      const form = event.currentTarget;
      requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
    }
  }

  return (
    <article className={styles.formPermamentLossCalculatorContainer}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <FieldsetCustom legend="Rok wyrejestrowania pojazdu z powodu trwałej utraty:">
          <div
            className={styles.container}
            data-tooltip-id="app-tooltip"
            data-tooltip-content={yearError}
            data-tooltip-variant="error"
          >
            <Select<ComboBoxOption<number>, false>
              name="year"
              inputId={`${id}-year`}
              instanceId={`${id}-year-select`}
              aria-label="Rok wyrejestrowania pojazdu z powodu trwałej utraty"
              aria-required="true"
              aria-invalid={Boolean(yearError)}
              aria-describedby={yearError ? `${id}-year-error` : undefined}
              options={comboBoxOptionsYear}
              value={
                comboBoxOptionsYear.find(
                  (option) => option.value === values.year,
                ) ?? null
              }
              styles={comboBoxStylesYear}
              formatOptionLabel={formatComboBoxOption}
              getOptionValue={(option) => String(option.value)}
              placeholder="Wybierz rok …"
              noOptionsMessage={() => "Brak pasujących opcji"}
              onChange={handleChange}
              onBlur={() => handleBlur("year")}
            />
          </div>
          <div aria-live="polite" aria-atomic="true">
            {yearError && (
              <p id={`${id}-year-error`} className={styles.visuallyHidden}>
                {yearError}
              </p>
            )}
          </div>
        </FieldsetCustom>
        <FieldsetCustom legend="Masa własna pojazdu w kg:">
          <div className={styles.container}>
            <SingleInput
              id={`${id}-weight`}
              name="VehicleWeight"
              label="Wprowadź masę własną pojazdu w kg ..."
              value={values.VehicleWeight}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              required
              aria-invalid={Boolean(weightError)}
              aria-describedby={weightError ? `${id}-weight-error` : undefined}
              data-tooltip-id="app-tooltip"
              data-tooltip-content={weightError}
              data-tooltip-variant="error"
              onChange={handleChange}
              onBlur={() => handleBlur("VehicleWeight")}
              onClear={handleClear}
            />
            <div aria-live="polite" aria-atomic="true">
              {weightError && (
                <p id={`${id}-weight-error`} className={styles.visuallyHidden}>
                  {weightError}
                </p>
              )}
            </div>
          </div>
        </FieldsetCustom>
        <FieldsetCustom legend="Rodzaj pojazdu:">
          <div
            className={styles.container}
            data-tooltip-id="app-tooltip"
            data-tooltip-content={vehicleError}
            data-tooltip-variant="error"
          >
            <Select<ComboBoxOption<VehicleFactor>, false>
              name="W"
              inputId={`${id}-vehicle`}
              instanceId={`${id}-vehicle-select`}
              aria-label="Rodzaj pojazdu"
              aria-required="true"
              aria-invalid={Boolean(vehicleError)}
              aria-describedby={
                vehicleError ? `${id}-vehicle-error` : undefined
              }
              options={comboBoxOptionsW}
              value={
                comboBoxOptionsW.find((option) => option.value === values.W) ??
                null
              }
              styles={comboBoxStylesW}
              formatOptionLabel={formatComboBoxOption}
              getOptionValue={(option) => String(option.value)}
              placeholder="Wybierz rodzaj pojazdu ..."
              noOptionsMessage={() => "Brak pasujących opcji"}
              onChange={handleChange}
              onBlur={() => handleBlur("W")}
            />
          </div>
          <div aria-live="polite" aria-atomic="true">
            {vehicleError && (
              <p id={`${id}-vehicle-error`} className={styles.visuallyHidden}>
                {vehicleError}
              </p>
            )}
          </div>
        </FieldsetCustom>
        <FieldsetCustom legend="Obliczenia:">
          <p>O = W x R + (2 x S x masa własna pojazdu w kg / 1000) + 0,5 x M</p>
          {(() => {
            // const displayedW = values?.W ?? "W";
            const displayedW = values?.W == null ? "W" : values?.W;
            const displayedR =
              parameters?.R == null ? "R" : formatCurrency(parameters.R);
            const displayedS =
              parameters?.S == null ? "S" : formatCurrency(parameters.S);
            const displayedM =
              parameters?.M == null ? "M" : formatCurrency(parameters.M);
            const displayedWeight = errors.VehicleWeight
              ? "masa własna pojazdu w kg"
              : `${values.VehicleWeight} kg`;
            const displayedO =
              result !== null ? formatCurrency(result) : "Brak danych";

            return (
              <>
                <p>
                  O = {displayedW} x {displayedR} + (2 x {displayedS} x{" "}
                  {displayedWeight} / 1000) + 0,5 x {displayedM}
                </p>
                <p role="status">O = {displayedO}</p>
              </>
            );
          })()}
        </FieldsetCustom>
        <FieldsetCustom legend="Pokaż wynik:">
          <ButtonUniversal type="submit" icon={<Calculator />} fullWidth>
            Oblicz
          </ButtonUniversal>
        </FieldsetCustom>
      </form>
    </article>
  );
}
