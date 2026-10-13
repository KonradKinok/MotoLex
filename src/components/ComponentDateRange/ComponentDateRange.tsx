import React, {
  useId,
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import { Calculator } from "lucide-react";
import { calculationAdministrativeDates } from "../globalFunctions/calculatorDate";
import {
  timeUnits,
  type AdministrativeDateRangeType,
} from "../../config/administrativeDateRangeTable";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import { ButtonUniversal } from "../CustomControls/ButtonUniversal/ButtonUniversal";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import ComboBoxDateRange from "./ComboBoxDateRange/ComboBoxDateRange";
import {
  displayErrorMessage,
  localDateWithWeekDay,
} from "../globalFunctions/globalFunctions";
import styles from "./ComponentDateRange.module.scss";
import ComboBoxKindTime from "./ComboBoxKindTime/ComboBoxKindTime";
import { SingleInput } from "../CustomControls/SingleInput/SingleInput";

export interface ComponentDateRangeProps {
  selectedValueForComboBox: AdministrativeDateRangeType | null;
  setSelectedValueForComboBox: React.Dispatch<
    React.SetStateAction<AdministrativeDateRangeType | null>
  >;
}

export default function ComponentDateRange({
  selectedValueForComboBox,
  setSelectedValueForComboBox,
}: ComponentDateRangeProps) {
  const [selectedValueCbTimeUnit, setSelectedValueCbTimeUnit] =
    useState<string>(timeUnits[0].en);
  const [selectedValueInputTimeAmount, setSelectedValueInputTimeAmount] =
    useState<number>(1);

  //DateTimePickers
  const datePickerAdministrativeId = useId();
  const datePickerKindTimeId = useId();
  const [
    dateTimePickerAdministrativeDate,
    setDateTimePickerAdministrativeDate,
  ] = useState(new Date());
  const [dateTimePickerKindTimeDate, setDateTimePickerKindTimeDate] = useState(
    new Date(),
  );

  //AdministrativeDates - rezultat
  const [
    resultCalculationAdministrativeDates,
    setResultCalculationAdministrativeDates,
  ] = useState<ReturnType<typeof calculationAdministrativeDates> | null>(null);

  //KindTime - rezultat
  const [resultCalculationKindTimeDates, setResultCalculationKindTimeDates] =
    useState<ReturnType<typeof calculationAdministrativeDates> | null>(null);

  //DateTimepickers - change
  const handleDateChange = (selectedDate: Date | null, id: string) => {
    if (selectedDate === null) return;
    if (id === datePickerAdministrativeId) {
      setDateTimePickerAdministrativeDate(selectedDate);
      setResultCalculationAdministrativeDates(null);
    } else if (id === datePickerKindTimeId) {
      setDateTimePickerKindTimeDate(selectedDate);
      setResultCalculationKindTimeDates(null);
    } else {
      return;
    }
  };

  //Administrative CB - change
  const handleChangeCbAdministrativeDateRange = (
    value: AdministrativeDateRangeType | null,
  ) => {
    setSelectedValueForComboBox(value);

    // Po zmianie opcji poprzednie obliczenia są nieaktualne.
    setResultCalculationAdministrativeDates(null);
  };

  //KindTime CB - change
  const handleChangeCbTimeUnit = (value: string) => {
    setSelectedValueCbTimeUnit(value);

    // Po zmianie opcji poprzednie obliczenia są nieaktualne.
    setResultCalculationKindTimeDates(null);
  };

  //KindTime - change
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.valueAsNumber;
    if (!Number.isInteger(value) || value <= 0) return;
    setSelectedValueInputTimeAmount(value);
    setResultCalculationKindTimeDates(null);
    return;
  };

  const handleSubmitFirstForm = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!selectedValueForComboBox) {
        throw new Error("Wybierz rodzaj terminu.");
      }

      const { timeAmount, timeUnit } = selectedValueForComboBox;

      const result = calculationAdministrativeDates(
        dateTimePickerAdministrativeDate,
        timeAmount,
        timeUnit,
      );

      setResultCalculationAdministrativeDates(result);
    } catch (error) {
      setResultCalculationAdministrativeDates(null);
      displayErrorMessage("ComponentDateRange", "handleSubmit", error);
    }
  };

  const handleSubmitKindTimeForm = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const timeAmount = selectedValueInputTimeAmount;
      const timeUnit = timeUnits.find(
        (unit) => unit.en === selectedValueCbTimeUnit,
      );

      if (!timeUnit) {
        throw new Error("Wybierz jednostkę czasu.");
      }

      const result = calculationAdministrativeDates(
        dateTimePickerKindTimeDate,
        timeAmount,
        timeUnit,
      );

      setResultCalculationKindTimeDates(result);
    } catch (error) {
      setResultCalculationKindTimeDates(null);
      displayErrorMessage(
        "ComponentDateRange",
        "handleSubmitSecondForm",
        error,
      );
    }
  };
  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmitFirstForm}>
        <FieldsetCustom legend="Oblicz termin administracyjny">
          <div className={styles.inputControls}>
            <ComboBoxDateRange
              onChange={handleChangeCbAdministrativeDateRange}
              selectedValue={selectedValueForComboBox}
            />
          </div>

          <div className={styles.containerDateTimePicker}>
            <label
              className={styles.labelDateTimePicker}
              htmlFor={datePickerAdministrativeId}
            >
              {selectedValueForComboBox?.descriptionSelectedDate}:
            </label>
            <DateTimePicker
              id={datePickerAdministrativeId}
              dateTimePickerDate={dateTimePickerAdministrativeDate}
              onChange={(date) =>
                handleDateChange(date, datePickerAdministrativeId)
              }
              isClearable={false}
            />
          </div>
          <p className={styles.printSummary}>
            Rodzaj terminu: {selectedValueForComboBox?.description}
          </p>
          <dl
            className={styles.resultContainer}
            aria-live="polite"
            aria-atomic="true"
          >
            <dt className={styles.resultLabel}>
              {selectedValueForComboBox?.descriptionSelectedDate}:
            </dt>
            <dd className={styles.resultDate}>
              {localDateWithWeekDay(
                resultCalculationAdministrativeDates?.startDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>
              {selectedValueForComboBox?.resultLastDayDescription}:
            </dt>
            <dd className={`${styles.resultDate} ${styles.resultDateEnd}`}>
              {localDateWithWeekDay(
                resultCalculationAdministrativeDates?.endDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>
              {selectedValueForComboBox?.resultAfterDayDescription}:
            </dt>
            <dd className={`${styles.resultDate} ${styles.resultDateEndAfter}`}>
              {localDateWithWeekDay(
                resultCalculationAdministrativeDates?.endDatePlusOneDay ?? null,
              )}
            </dd>
          </dl>
          <ButtonUniversal
            className={styles.submitButton}
            type="submit"
            icon={<Calculator />}
            fullWidth
          >
            Oblicz termin
          </ButtonUniversal>
        </FieldsetCustom>
      </form>
      <form className={styles.form} onSubmit={handleSubmitKindTimeForm}>
        <FieldsetCustom legend="Oblicz dowolny termin administracyjny">
          <div className={styles.inputsContainer}>
            <div className={styles.containerDateTimePicker}>
              <label
                className={styles.labelDateTimePicker}
                htmlFor={datePickerKindTimeId}
              >
                Data początkowa:
              </label>
              <DateTimePicker
                id={datePickerKindTimeId}
                dateTimePickerDate={dateTimePickerKindTimeDate}
                onChange={(date) =>
                  handleDateChange(date, datePickerKindTimeId)
                }
                isClearable={false}
              />
            </div>
            <ComboBoxKindTime
              onChange={handleChangeCbTimeUnit}
              selectedValue={selectedValueCbTimeUnit}
            />
            <SingleInput
              id={`id-selectedValueInputTimeAmount`}
              name="amountTime"
              label="Wprowadź liczbę jednostek czasu . . ."
              value={selectedValueInputTimeAmount}
              type="number"
              inputMode="numeric"
              required
              min={1}
              step={1}
              // aria-invalid={Boolean(weightError)}
              // aria-describedby={weightError ? `${id}-weight-error` : undefined}
              data-tooltip-id="app-tooltip"
              // data-tooltip-content={weightError}
              data-tooltip-variant="error"
              onChange={handleChangeInput}
              // onBlur={() => handleBlur("VehicleWeight")}
              // onClear={handleClear}
            />
          </div>
          <dl
            className={styles.resultContainer}
            aria-live="polite"
            aria-atomic="true"
          >
            <dt className={styles.resultLabel}>Data początkowa:</dt>
            <dd className={styles.resultDate}>
              {localDateWithWeekDay(
                resultCalculationKindTimeDates?.startDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>Data końcowa:</dt>
            <dd className={`${styles.resultDate} ${styles.resultDateEnd}`}>
              {localDateWithWeekDay(
                resultCalculationKindTimeDates?.endDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>Przekroczona data:</dt>
            <dd className={`${styles.resultDate} ${styles.resultDateEndAfter}`}>
              {localDateWithWeekDay(
                resultCalculationKindTimeDates?.endDatePlusOneDay ?? null,
              )}
            </dd>
          </dl>
          <ButtonUniversal
            className={styles.submitButton}
            type="submit"
            icon={<Calculator />}
            fullWidth
          >
            Oblicz termin
          </ButtonUniversal>
        </FieldsetCustom>
      </form>
    </div>
  );
}
