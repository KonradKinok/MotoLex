import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import ComponentPenalties from "../../components/ComponentPenalties/ComponentPenalties";
import styles from "./PenaltiesCalculatorPage.module.scss";

function PenaltiesCalculatorPage() {
  return (
    <>
      <PageMetadata
        title={`Kalkulator kar za brak rejestracji lub zgłoszenia zbycia | ${APPLICATION_NAME}`}
        description="Sprawdź terminy i wysokość kar za brak złożenia wniosku o rejestrację pojazdu lub zgłoszenia zbycia pojazdu."
        path={ROUTES.penaltiesCalculator}
      />
      <section className={styles.penaltiesCalculatorPageContainer}>
        <h1 className={styles.headerH1}>Kalkulator kar</h1>
        <ComponentPenalties />
      </section>
    </>
  );
}

export default PenaltiesCalculatorPage;
