import { type SubmitEvent } from "react";
import { FormPermamentLossCalculator } from "../../components/FormPermamentLossCalculator/FormPermamentLossCalculator";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import styles from "./PermanentLossCalculatorPage.module.scss";

function PermanentLossCalculatorPage() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <>
      <PageMetadata
        title={`Kalkulator opłaty w przypadku trwałej utraty pojazdu | ${APPLICATION_NAME}`}
        description="Kalkulator opłaty z tytułu udokumentowanej trwałej i zupełnej utraty posiadania pojazdu bez zmiany w zakresie prawa własności."
        path={ROUTES.permanentLossCalculator}
      />
      <section className={styles.permanentLossCalculatorPageMainContainer}>
        <h1>Kalkulator trwalej utraty</h1>
        <article>
          <p>Wzór:</p>
          <p>O = W x R + 2 x S + 0,5 x M</p>
          <p>Opis:</p>
          <ol className={styles.legalList}>
            <li className={styles.legalListItem}>
              O - łączna kwota opłaty będąca warunkiem wyrejestrowania pojazdu w
              przypadku udokumentowanej trwałej i zupełnej utraty pojazdu bez
              zmiany w zakresie prawa własności,
            </li>
            <li className={styles.legalListItem}>
              W - współczynnik będący mnożnikiem opłaty za wydanie dowodu
              rejestracyjnego, uzależniony od rodzaju pojazdu i wynoszący:
              <ol className={styles.legalSublist}>
                <li className={styles.legalSublistItem}>
                  1,5 - dla motorowerów,
                </li>
                <li className={styles.legalSublistItem}>
                  2,0 - dla motocykli i przyczep,
                </li>
                <li className={styles.legalSublistItem}>
                  4,0 - dla ciągników rolniczych i pojazdów samochodowych o
                  masie własnej nieprzekraczającej 3,5 tony,
                </li>
                <li className={styles.legalSublistItem}>
                  6,0 - dla pojazdów samochodowych o masie własnej
                  przekraczającej 3,5 tony,
                </li>
              </ol>
            </li>
            <li className={styles.legalListItem}>
              R - równowartość opłaty pobieranej za wydanie dowodu
              rejestracyjnego pojazdu, określonej na podstawie odrębnych
              przepisów,
            </li>
            <li className={styles.legalListItem}>
              S - stawka opłaty za umieszczenie zużytego lub nienadającego się
              do użytkowania pojazdu na składowisku odpadów, określona na
              podstawie odrębnych przepisów,
            </li>
            <li className={styles.legalListItem}>
              M - maksymalna stawka grzywny w postępowaniu mandatowym, określona
              na podstawie odrębnych przepisów.
            </li>
          </ol>
        </article>
        <FormPermamentLossCalculator handleSubmit={handleSubmit} />
      </section>
    </>
  );
}

export default PermanentLossCalculatorPage;
