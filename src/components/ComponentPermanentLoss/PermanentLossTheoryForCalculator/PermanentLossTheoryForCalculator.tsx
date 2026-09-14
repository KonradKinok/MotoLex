import styles from "./PermanentLossTheoryForCalculator.module.scss";

export function PermanentLossTheoryForCalculator() {
  return (
    <article className={styles.permanentLossTheoryForCalculatorContainer}>
      <div className={styles.container}>
        <p>
          <b>Wzór:</b>
        </p>
        <p>O = W x R + 2 x S + 0,5 x M</p>
      </div>
      <div className={styles.container}>
        <p>
          <b>Opis:</b>
        </p>
        <ol className={styles.legalList}>
          <li>
            <b>O</b> - łączna kwota opłaty będąca warunkiem wyrejestrowania
            pojazdu w przypadku udokumentowanej trwałej i zupełnej utraty
            pojazdu bez zmiany w zakresie prawa własności,
          </li>
          <li>
            <b>W</b> - współczynnik będący mnożnikiem opłaty za wydanie dowodu
            rejestracyjnego, uzależniony od rodzaju pojazdu i wynoszący:
            <ol className={styles.legalSublist}>
              <li className={styles.legalSublistItem}>
                1,5 - dla motorowerów,
              </li>
              <li className={styles.legalSublistItem}>
                2,0 - dla motocykli i przyczep,
              </li>
              <li className={styles.legalSublistItem}>
                4,0 - dla ciągników rolniczych i pojazdów samochodowych o masie
                własnej nieprzekraczającej 3,5 tony,
              </li>
              <li className={styles.legalSublistItem}>
                6,0 - dla pojazdów samochodowych o masie własnej przekraczającej
                3,5 tony,
              </li>
            </ol>
          </li>
          <li>
            <b>R</b> - równowartość opłaty pobieranej za wydanie dowodu
            rejestracyjnego pojazdu, określonej na podstawie odrębnych
            przepisów,
          </li>
          <li>
            <b>S (jednostkowa stawka opłaty x masa własna pojazdu w kg/1000)</b>{" "}
            - stawka opłaty za umieszczenie zużytego lub nienadającego się do
            użytkowania pojazdu na składowisku odpadów, określona na podstawie
            odrębnych przepisów,
          </li>
          <li>
            <b>M</b> - maksymalna stawka grzywny w postępowaniu mandatowym,
            określona na podstawie odrębnych przepisów.
          </li>
        </ol>
      </div>
    </article>
  );
}

export default PermanentLossTheoryForCalculator;
