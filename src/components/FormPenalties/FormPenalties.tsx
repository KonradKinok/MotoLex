import React from "react";
import type {
  CalculationResult,
  PenaltiesFormData,
} from "../../types/globalTypes";
import { getRbData } from "./formPenaltiesDataToRb";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import { RadioButton } from "../CustomControls/RadioButton/RadioButton";
import { CheckBoxSlider } from "../CustomControls/CheckBoxSlider/CheckBoxSlider";
import { PENALTIES_MAX_DATE } from "./penaltiesDateRange";
import { PENALTIES_MIN_DATE } from "./penaltiesDateRange";
import styles from "./FormPenalties.module.scss";

export interface FormPenaltiesProps {
  formData: PenaltiesFormData;
  setFormData: React.Dispatch<React.SetStateAction<PenaltiesFormData>>;
  handleSubmit: React.SubmitEventHandler<HTMLFormElement>;
  setCalculationResults: React.Dispatch<
    React.SetStateAction<CalculationResult | null>
  >;
}

export function FormPenalties({
  formData,
  setFormData,
  handleSubmit,
  setCalculationResults,
}: FormPenaltiesProps) {
  const handleDateChange = (selectedDate: Date | null) => {
    setFormData((previousData) => ({
      ...previousData,
      selectedDate,
    }));

    setCalculationResults(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormData((previousData) => {
      switch (name) {
        case "typeOfEvent":
          return {
            ...previousData,
            typeOfEvent: value as PenaltiesFormData["typeOfEvent"],
          };

        case "typeOfPerson":
          return {
            ...previousData,
            typeOfPerson: value as PenaltiesFormData["typeOfPerson"],
          };

        case "detailedData":
          return {
            ...previousData,
            detailedData: checked,
          };

        default:
          return previousData;
      }
    });
    if (name !== "detailedData") setCalculationResults(null);
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.containerDateTimePicker}>
          <label
            className={styles.labelDateTimePicker}
            htmlFor="dateTimePicker"
          >
            Wybierz datę sporządzenia umowy, sprowadzenia pojazdu do Polski,
            dziedziczenia:
          </label>
          <DateTimePicker
            dateTimePickerDate={formData.selectedDate}
            onChange={handleDateChange}
            minDate={PENALTIES_MIN_DATE}
            maxDate={PENALTIES_MAX_DATE}
            isClearable={false}
          />
        </div>
        <fieldset className={styles.fieldsetRadio}>
          <legend className={styles.legend}>Rodzaj zdarzenia</legend>

          {getRbData.rbTypeOfEventsTable.map((radioButton) => {
            return (
              <RadioButton
                {...radioButton}
                key={radioButton.id}
                checked={formData.typeOfEvent === radioButton.value}
                onChange={handleChange}
              />
            );
          })}
        </fieldset>
        <fieldset className={styles.fieldsetRadio}>
          <legend className={styles.legend}>Rodzaj osoby</legend>
          {getRbData.rbTypeOfPersonTable.map((radioButton) => (
            <RadioButton
              {...radioButton}
              key={radioButton.id}
              checked={formData.typeOfPerson === radioButton.value}
              onChange={handleChange}
            />
          ))}
        </fieldset>
        <div className={`${styles.fieldsetRadio} ${styles.containerButton}`}>
          <CheckBoxSlider
            id="detailed-data"
            name="detailedData"
            label="Pokaż szczegółowe dane:"
            checked={formData.detailedData}
            onChange={handleChange}
            layout="vertical"
          />
          <button type="submit">Pokaż</button>
        </div>
      </form>
    </div>
  );
}
