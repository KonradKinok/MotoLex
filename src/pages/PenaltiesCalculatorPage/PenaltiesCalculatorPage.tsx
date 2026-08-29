import { useEffect, useState, type SubmitEvent } from "react";
import { FormPenalties } from "../../components/FormPenalties/FormPenalties";
import {
  calculationNumberOfDays,
  type InputData,
} from "../../components/globalFunctions/calculator";
import { logToConsole } from "../../components/globalFunctions/console";
// import { formatDate } from "../../components/globalFunctions/globalFunctions";
import styles from "./PenaltiesCalculatorPage.module.scss";
import { formatDate } from "../../components/globalFunctions/globalFunctions";

export type CalculationResult = ReturnType<typeof calculationNumberOfDays>;
export type PenaltiesFormData = InputData & {
  detailedData: boolean;
};

function PenaltiesCalculatorPage() {
  const [formData, setFormData] = useState<PenaltiesFormData>({
    selectedDate: new Date(),
    typeOfEvent: "bought",
    typeOfPerson: "otherOwner",
    detailedData: false,
  });

  const [calculationResults, setCalculationResults] =
    useState<CalculationResult | null>(null);
  const [dateError, setDateError] = useState("");
  const [calculationError, setCalculationError] = useState("");
  // function handleFormDataChange(newFormData: FormPenaltiesData) {
  //   setFormData(newFormData);
  //   setCalculationResults(null);
  //   setDateError("");
  //   setCalculationError("");
  // }
  useEffect(() => {
    logToConsole("log", "PenaltiesCalculatorPage formData", formData);
  });
  console.log(calculationResults, dateError, calculationError);
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      formData.selectedDate === null ||
      Number.isNaN(formData.selectedDate.getTime())
    ) {
      setCalculationResults(null);
      setDateError("Wybierz prawidłową datę zdarzenia");
      setCalculationError("");
      return;
    }

    const inputData: InputData = {
      selectedDate: formData.selectedDate,
      typeOfEvent: formData.typeOfEvent,
      typeOfPerson: formData.typeOfPerson,
    };

    try {
      setCalculationResults(calculationNumberOfDays(inputData));
      setDateError("");
      setCalculationError("");
    } catch (error) {
      setCalculationResults(null);
      setCalculationError(
        error instanceof Error
          ? error.message
          : "Nie udało się wykonać obliczeń",
      );
    }
  }

  return (
    <section>
      <article>
        <h1>Kalkulator kar</h1>
      </article>
      <article>
        <FormPenalties
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          // setCalculationResults={setCalculationResults}
        />
      </article>
      <article>
        {calculationError && <p role="alert">{calculationError}</p>}
        {calculationResults?.listOfDays.map((calculationResult, index) => {
          return (
            <div
              className={styles.containerCalculator}
              key={`${calculationResult.kind}-${calculationResult.nextDayDate.getTime()}-${index}`}
            >
              <p>{index}</p>
              <p>{formatDate(calculationResult.nextDayDate)}</p>
              <p>{calculationResult.nextDayOfTheDeadlineNumber}</p>
              <p>{formatDate(calculationResult.punishmentNextDate)}</p>
              <p>{calculationResult.description}</p>
              <p>{calculationResult.iconName}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default PenaltiesCalculatorPage;
