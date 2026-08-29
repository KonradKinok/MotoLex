import React, { useEffect, useState } from "react";
import { formatDate } from "../globalFunctions/globalFunctions";
import {
  // type CalculationResult,
  type PenaltiesFormData,
} from "../../pages/PenaltiesCalculatorPage/PenaltiesCalculatorPage";
import { getRbData } from "./formPenaltiesDataToRb";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import { RadioButton } from "../CustomControls/RadioButton/RadioButton";
import { CheckBoxSlider } from "../CustomControls/CheckBoxSlider/CheckBoxSlider";
import { logToConsole } from "../globalFunctions/console";
import styles from "./FormPenalties.module.scss";

export interface FormPenaltiesProps {
  formData: PenaltiesFormData;
  setFormData: React.Dispatch<React.SetStateAction<PenaltiesFormData>>;
  handleSubmit: React.SubmitEventHandler<HTMLFormElement>;
  // setCalculationResults: React.Dispatch<
  //   React.SetStateAction<CalculationResult | null>
  // >;
}
// {
//   setCalculatedData,
//   calculatedData,
//   formValues,
//   setFormValues,
// }
export function FormPenalties({
  formData,
  setFormData,
  handleSubmit,
  // setCalculationResults,
}: FormPenaltiesProps) {
  const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
    new Date(),
  );

  useEffect(() => {
    if (dateTimePickerDate)
      setFormData((prevData) => ({
        ...prevData,
        selectedDate: dateTimePickerDate,
      }));
    logToConsole(
      "log",
      "FormPenalties [dateTimePickerDate]:",
      dateTimePickerDate,
    );
    logToConsole(
      "log",
      "FormPenalties [dateTimePickerDate formated]:",
      formatDate(dateTimePickerDate),
    );
    // setCalculatedData(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateTimePickerDate]);

  // const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setFormValues((prevData) => ({
  //     ...prevData,
  //     selectedDate: dateTimePickerDate,
  //   }));
  //   const {
  //     selectedDate,
  //     sold,
  //     bought,
  //     inheritance,
  //     isNaturalPerson,
  //     isLegalPerson,
  //     detailedData,
  //   } = formValues;

  //   const calculatedDataFunction = calculator.calculationNumberOfDays(
  //     selectedDate,
  //     sold,
  //     bought,
  //     inheritance,
  //     isNaturalPerson,
  //     isLegalPerson,
  //     detailedData,
  //     currentLanguage,
  //   );

  //   setCalculatedData(calculatedDataFunction);
  // };
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
            dateTimePickerDate={dateTimePickerDate}
            setDateTimePickerDate={setDateTimePickerDate}
            minDate={new Date(2024, 0, 1)}
            maxDate={new Date(2099, 11, 31)}
            isClearable={false}
          />
        </div>
        <fieldset className={styles.fieldsetRadio}>
          <legend className={styles.legend}>Rodzaj zdarzenia</legend>
          {getRbData.rbTypeOfEventsTable.map((radioButton) => (
            <RadioButton
              {...radioButton}
              key={radioButton.id}
              checked={formData.typeOfEvent === radioButton.value}
              onChange={handleChange}
            />
          ))}
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
