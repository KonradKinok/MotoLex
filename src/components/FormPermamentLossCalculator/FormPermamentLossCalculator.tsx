import { useState } from "react";
import { DateTimePicker } from "../CustomControls/DateTimePicker/DateTimePicker";
import styles from "./FormPermamentLossCalculator.module.scss";
import type { PermanentLossFormData } from "../../types/globalTypes";

const PERMAMENT_LOSS_MIN_DATE = new Date(2024, 0, 1);
const PERMAMENT_LOSS_MAX_DATE = new Date();

// const permamentLossRulesTable = [
//   {
//     year: 2024,
//     rules: [
//       { R: "first", deadline: 30, amount: 500 },
//       { stage: "second", deadline: 180, amount: 1000 },
//     ],
//   },
// ];

export interface FormPermamentLossCalculatorProps {
  handleSubmit: React.SubmitEventHandler<HTMLFormElement>;
}

export function FormPermamentLossCalculator({
  handleSubmit,
}: FormPermamentLossCalculatorProps) {
  const [formData, setFormData] = useState<PermanentLossFormData>({
    selectedDate: new Date(),
    O: 0,
    W: 0,
    S: 0,
    M: 0,
  });
  const handleDateChange = (selectedDate: Date | null) => {
    console.log("handleDateChange called with:", selectedDate);
    setFormData((previousData) => ({
      ...previousData,
      selectedDate,
    }));

    // setCalculationResults(null);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, checked } = event.target;
  //   console.log("handleChange called with:", { name, value, checked });
  //   setFormData((previousData) => {
  //     switch (name) {
  //       case "typeOfEvent":
  //         return {
  //           ...previousData,
  //           typeOfEvent: value as PenaltiesFormData["typeOfEvent"],
  //         };

  //       case "typeOfPerson":
  //         return {
  //           ...previousData,
  //           typeOfPerson: value as PenaltiesFormData["typeOfPerson"],
  //         };

  //       case "detailedData":
  //         return {
  //           ...previousData,
  //           detailedData: checked,
  //         };

  //       default:
  //         return previousData;
  //     }
  //   });
  //   if (name !== "detailedData") setCalculationResults(null);
  // };

  return (
    <article className={styles.formPermamentLossCalculatorContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.containerDateTimePicker}>
          <label
            className={styles.labelDateTimePicker}
            htmlFor="dateTimePicker"
          >
            Wybierz datę złożenia wniosku o wyrejestrowanie pojazdu z powdu
            trwałej utraty:
          </label>
          <DateTimePicker
            dateTimePickerDate={formData.selectedDate}
            onChange={handleDateChange}
            minDate={PERMAMENT_LOSS_MIN_DATE}
            maxDate={PERMAMENT_LOSS_MAX_DATE}
            isClearable={false}
          />
        </div>
        <fieldset className={styles.fieldsetRadio}>
          <legend className={styles.legend}>Rodzaj zdarzenia</legend>
        </fieldset>
        <fieldset className={styles.fieldsetRadio}>
          <legend className={styles.legend}>Rodzaj osoby</legend>
        </fieldset>
        <div className={`${styles.fieldsetRadio} ${styles.containerButton}`}>
          <button type="submit">Pokaż</button>
        </div>
      </form>
    </article>
  );
}
