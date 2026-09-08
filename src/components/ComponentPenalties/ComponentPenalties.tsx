import { useState, type SubmitEvent } from "react";
import type {
  CalculationResult,
  InputData,
  PenaltiesFormData,
} from "../../types/globalTypes";
import { calculationNumberOfDays } from "../globalFunctions/calculator";
import { ListOfDatesPunishment } from "./ListOfDatesPunishment/ListOfDatesPunishment";
import { FormPenalties } from "./FormPenalties/FormPenalties";
import {
  isDateInPenaltiesRange,
  PENALTIES_MAX_DATE,
  PENALTIES_MIN_DATE,
} from "./FormPenalties/penaltiesDateRange";

function ComponentPenalties() {
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
      !(formData.selectedDate instanceof Date) ||
      Number.isNaN(formData.selectedDate.getTime())
    ) {
      setCalculationResults(null);
      setCalculationError("Wybierz prawidłową datę.");
      return;
    }

    if (!isDateInPenaltiesRange(formData.selectedDate)) {
      setCalculationResults(null);
      setCalculationError(
        `Data musi mieścić się w zakresie od ${PENALTIES_MIN_DATE} do ${PENALTIES_MAX_DATE}.`,
      );
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
    <article>
      <FormPenalties
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        setCalculationResults={setCalculationResults}
      />

      {calculationError && <p role="alert">{calculationError}</p>}
      <ListOfDatesPunishment
        calculationResults={calculationResults}
        detailedData={formData.detailedData}
      />
    </article>
  );
}

export default ComponentPenalties;
