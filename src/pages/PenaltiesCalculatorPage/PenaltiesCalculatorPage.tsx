import {
  calculationNumberOfDays,
  type InputData,
} from "../../components/globalFunctions/calculator";
import { formatDate } from "../../components/globalFunctions/globalFunctions";
import styles from "./PenaltiesCalculatorPage.module.scss";

function PenaltiesCalculatorPage() {
  const inputData: InputData = {
    selectedDate: new Date(2026, 0, 4),
    typeOfEvent: "registration",
    typeOfPerson: "vehicleTrader",
  };
  const calculationResults = calculationNumberOfDays(inputData);
  return (
    <article>
      <h1>Kalkulator kar</h1>
      <p>Treści dotyczące kalkulatorów kar.</p>
      {calculationResults?.listOfDays.map((calculationResult, index) => {
        return (
          <div className={styles.containerCalculator}>
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
  );
}

export default PenaltiesCalculatorPage;
