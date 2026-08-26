import React, { useEffect, useState } from "react";
import {
  // type CalculationResult,
  type PenaltiesFormData,
} from "../../pages/PenaltiesCalculatorPage/PenaltiesCalculatorPage";
// import * as calculator from "../../globalFunctions/calculator";
// import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";

// import { FormValues } from "../../pages/PenaltiesPage/PenaltiesPage";
// import { CalculatedData } from "../ListOfDates/ListOfDays";
// import { CheckboxRegular } from "../CheckboxRegular/CheckboxRegular";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import styles from "./FormPenalties.module.scss";
import { logToConsole } from "../globalFunctions/console";
import { formatDate } from "../globalFunctions/globalFunctions";
import { RadioButton } from "../CustomControls/RadioButton/RadioButton";

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
        <div className={styles.containerRadio}>
          <label htmlFor="radio-sold">
            <p className={styles.customTitle}>Sprzedałem pojazd:</p>
          </label>
          <input
            type="radio"
            name="typeOfEvent"
            id="radio-sold"
            className={styles.toggleSwitch}
            value="sold"
            checked={formData.typeOfEvent === "sold"}
            onChange={handleChange}
          />
          <label htmlFor="radio-bought">
            <p className={styles.customTitle}>Kupiłem/sprowadziłem pojazd:</p>
          </label>
          <input
            type="radio"
            name="typeOfEvent"
            id="radio-bought"
            value="registration"
            checked={formData.typeOfEvent === "registration"}
            onChange={handleChange}
            className={styles.toggleSwitch}
          />
          <label htmlFor="radio-inheritance">
            <p className={styles.customTitle}>
              Odziedziczyłem pojazd w Polsce:
            </p>
          </label>
          <input
            type="radio"
            name="typeOfEvent"
            id="radio-inheritance"
            value="inheritance"
            checked={formData.typeOfEvent === "inheritance"}
            onChange={handleChange}
            className={styles.toggleSwitch}
          />
        </div>
        <div className={styles.containerRadio}>
          <RadioButton
            id="natural-person"
            name="typeOfPerson"
            value="otherOwner"
            label="Jestem osobą fizyczną:"
            checked={formData.typeOfPerson === "otherOwner"}
            onChange={handleChange}
            layout="horizontal"
          />
          <RadioButton
            id="legal-person"
            name="typeOfPerson"
            value="vehicleTrader"
            label="Jestem przedsiębiorcą prowadzącym obrót pojazdami:"
            checked={formData.typeOfPerson === "vehicleTrader"}
            onChange={handleChange}
            layout="vertical"
          />
          {/* <label htmlFor="legal-person">
            <span className={styles.customTitle}>
              Jestem przedsiębiorcą prowadzącym obrót pojazdami:
            </span>
            <input
              type="radio"
              name="typeOfPerson"
              id="legal-person"
              value="vehicleTrader"
              checked={formData.typeOfPerson === "vehicleTrader"}
              onChange={handleChange}
              className={styles.toggleSwitch}
            />
          </label> */}
        </div>
        <div className={`${styles.containerRadio} ${styles.containerButton}`}>
          <label htmlFor="detailed-data">
            <p className={styles.customTitle}>Pokaż szczegółowe dane:</p>
          </label>
          <input
            type="checkbox"
            name="detailedData"
            id="detailed-data"
            checked={formData.detailedData}
            onChange={handleChange}
            className={styles.toggleSwitch}
          />
          <button type="submit">Pokaż</button>
        </div>
      </form>
    </div>
  );
}
