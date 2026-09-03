import { useState, type SubmitEvent } from "react";
import { FormPenalties } from "../../components/FormPenalties/FormPenalties";
import {
  calculationNumberOfDays,
  type InputData,
  type CalculationResult,
} from "../../components/globalFunctions/calculator";
import ListOfDatesPunishment from "../../components/ListOfDatesPunishment/ListOfDatesPunishment";
// import styles from "./PenaltiesCalculatorPage.module.scss";

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
  const [calculationError, setCalculationError] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      formData.selectedDate === null ||
      Number.isNaN(formData.selectedDate.getTime())
    ) {
      setCalculationResults(null);
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
          setCalculationResults={setCalculationResults}
        />
      </article>
      <article>
        {calculationError && <p role="alert">{calculationError}</p>}
        <ListOfDatesPunishment
          calculationResults={calculationResults}
          detailedData={formData.detailedData}
        />
      </article>
    </section>
  );
}

export default PenaltiesCalculatorPage;
