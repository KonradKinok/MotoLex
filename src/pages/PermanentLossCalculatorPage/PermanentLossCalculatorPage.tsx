import { FormPermanentLossCalculator } from "../../components/ComponentPermanentLoss/FormPermanentLossCalculator/FormPermanentLossCalculator";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import styles from "./PermanentLossCalculatorPage.module.scss";
import PermanentLossTheoryForCalculator from "../../components/ComponentPermanentLoss/PermanentLossTheoryForCalculator/PermanentLossTheoryForCalculator";

function PermanentLossCalculatorPage() {
  return (
    <>
      <PageMetadata
        title={`Kalkulator opłaty w przypadku trwałej utraty pojazdu | ${APPLICATION_NAME}`}
        description="Kalkulator opłaty z tytułu udokumentowanej trwałej i zupełnej utraty posiadania pojazdu bez zmiany w zakresie prawa własności."
        path={ROUTES.permanentLossCalculator}
      />
      <section className={styles.permanentLossCalculatorPageMainContainer}>
        <h1 className={styles.headerH1}>Kalkulator trwałej utraty</h1>
        <PermanentLossTheoryForCalculator />
        <FormPermanentLossCalculator />
      </section>
    </>
  );
}

export default PermanentLossCalculatorPage;
