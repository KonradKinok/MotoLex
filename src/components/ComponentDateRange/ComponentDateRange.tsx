import React, { useState, type SubmitEvent } from "react";
import { Calculator } from "lucide-react";
import { calculationAdministrativeDates } from "../globalFunctions/calculatorDate";
import type { AdministrativeDateRangeType } from "../globalFunctions/administrativeDateRangeTable";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import { ButtonUniversal } from "../CustomControls/ButtonUniversal/ButtonUniversal";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import ComboBoxDateRange from "./ComboBoxDateRange/ComboBoxDateRange";
import {
  displayErrorMessage,
  localDateWithWeekDay,
} from "../globalFunctions/globalFunctions";
import styles from "./ComponentDateRange.module.scss";

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
  const [dateTimePickerDate, setDateTimePickerDate] = useState(new Date());

  const [
    resultCalculationAdministrativeDates,
    setResultCalculationAdministrativeDates,
  ] = useState<ReturnType<typeof calculationAdministrativeDates> | null>(null);

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate === null) return;
    setDateTimePickerDate(selectedDate);
    setResultCalculationAdministrativeDates(null);
  };

  const handleChange = (value: AdministrativeDateRangeType | null) => {
    setSelectedValueForComboBox(value);

    // Po zmianie opcji poprzednie obliczenia są nieaktualne.
    setResultCalculationAdministrativeDates(null);
  };

  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    try {
      if (!selectedValueForComboBox) {
        throw new Error("Wybierz rodzaj terminu.");
      }

      const { timeAmount, timeUnit } = selectedValueForComboBox;

      const result = calculationAdministrativeDates(
        dateTimePickerDate,
        timeAmount,
        timeUnit,
      );

      setResultCalculationAdministrativeDates(result);
    } catch (error) {
      setResultCalculationAdministrativeDates(null);
      displayErrorMessage("ComponentDateRange", "handleSubmit", error);
    }
  }

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FieldsetCustom legend="Oblicz termin administracyjny">
          <div className={styles.inputControls}>
            <ComboBoxDateRange
              onChange={handleChange}
              selectedValue={selectedValueForComboBox}
            />
          </div>
          <div className={styles.containerDateTimePicker}>
            <label
              className={styles.labelDateTimePicker}
              htmlFor="dateTimePicker"
            >
              {selectedValueForComboBox?.descriptionSelectedDate ?? "Data początkowa"}:
            </label>
            <DateTimePicker
              dateTimePickerDate={dateTimePickerDate}
              onChange={handleDateChange}
              isClearable={false}
            />
          </div>
          <p className={styles.printSummary}>
            Rodzaj terminu: {selectedValueForComboBox?.description ?? "Nie wybrano"}
          </p>
          <dl
            className={styles.resultContainer}
            aria-live="polite"
            aria-atomic="true"
          >
            <dt className={styles.resultLabel}>Data początkowa:</dt>
            <dd className={styles.resultDate}>
              {localDateWithWeekDay(
                resultCalculationAdministrativeDates?.startDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>Ostatni dzień terminu:</dt>
            <dd className={`${styles.resultDate} ${styles.resultDateEnd}`}>
              {localDateWithWeekDay(
                resultCalculationAdministrativeDates?.endDate ?? null,
              )}
            </dd>
            <dt className={styles.resultLabel}>Dzień po terminie:</dt>
            <dd
              className={`${styles.resultDate} ${styles.resultDateEndAfter}`}
            >
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
    </div>
  );
}
