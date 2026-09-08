import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import CalculatorVin from "../../components/ComponentVin/CalculatorVin/CalculatorVin";
import styles from "./VinCalculatorPage.module.scss";

function VinCalculatorPage() {
  return (
    <>
      <PageMetadata
        title={`Kalkulator VIN | ${APPLICATION_NAME}`}
        description="Sprawdź poprawność numeru VIN dla nowych pojazdów rejestrowanych od 07 lipca 2026 roku i upewnij się, że jest prawidłowy."
        path={ROUTES.vinCalculator}
      />
      <section className={styles.vinCalculatorPageContainer}>
        <h1 className={styles.headerH1}>Kalkulator VIN</h1>
        <CalculatorVin />
      </section>
    </>
  );
}

export default VinCalculatorPage;
