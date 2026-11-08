import { useAppContext } from "../../../hooks/useAppContext";
import { FieldsetCustom } from "../../CustomControls/FieldsetCustom/FieldsetCustom";
import styles from "./PermanentLossTheoryForCalculator.module.scss";

export default function PermanentLossTheoryForCalculator() {
  const {
    rozWzorOplataTrwalaUtrata,
    rozOplatyZaDrPcTr,
    rozStawkaOplatZaSrodowisko,
    obwOplatyTrwalaUtrata,
    kpw,
  } = useAppContext();

  //Nazwy aktów prawnych do wyświetlenia.
  const lastRozWzorOplataTrwalaUtrataTitle =
    rozWzorOplataTrwalaUtrata.data?.at(-1)?.title;
  const lastRozOplatyZaDrPcTrTitle = rozOplatyZaDrPcTr.data?.at(-1)?.title;
  const lastRozStawkaOplatZaSrodowiskoTitle =
    rozStawkaOplatZaSrodowisko.data?.at(-1)?.title;
  const firstObwOplatyTrwalaUtrataTitle =
    obwOplatyTrwalaUtrata.data?.at(0)?.title;
  const lastKpwTitleActName = kpw.data?.at(-1)?.title;
  const lastKpwTitle = lastKpwTitleActName
    ?.replace("(tekst ujednolicony)", "")
    .trim();

  return (
    <FieldsetCustom legend={`Kalkulator:`}>
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
            {lastRozWzorOplataTrwalaUtrataTitle && (
              <p className={styles.legalActsTitle}>
                § 1 pkt 2 {lastRozWzorOplataTrwalaUtrataTitle}
              </p>
            )}
          </li>
          <li>
            <b>R</b> - równowartość opłaty pobieranej za wydanie dowodu
            rejestracyjnego pojazdu, określonej na podstawie odrębnych
            przepisów,
            {lastRozOplatyZaDrPcTrTitle && (
              <p className={styles.legalActsTitle}>
                § 2 {lastRozOplatyZaDrPcTrTitle}
              </p>
            )}
          </li>
          <li>
            <b>S (jednostkowa stawka opłaty x masa własna pojazdu w kg/1000)</b>{" "}
            - stawka opłaty za umieszczenie zużytego lub nienadającego się do
            użytkowania pojazdu na składowisku odpadów, określona na podstawie
            odrębnych przepisów,
            {lastRozStawkaOplatZaSrodowiskoTitle && (
              <>
                <p className={styles.legalActsTitle}>
                  § 3 ust.1 Jednostkowe stawki opłaty za umieszczenie odpadów na
                  składowisku są określone w załączniku nr 2 do rozporządzenia.
                </p>
                <p className={styles.legalActsTitle}>
                  Załącznik nr 2 Lp. 738; Kod odpadu: 16 01 04; Grupy, podgrupy
                  i rodzaje odpadów: Zużyte lub nienadające się do użytkowania
                  pojazdy.
                </p>
                <p className={styles.legalActsTitle}>
                  {lastRozStawkaOplatZaSrodowiskoTitle}
                </p>
              </>
            )}
            {firstObwOplatyTrwalaUtrataTitle && (
              <p className={styles.legalActsTitle}>
                {firstObwOplatyTrwalaUtrataTitle}
              </p>
            )}
          </li>
          <li>
            <b>M</b> - maksymalna stawka grzywny w postępowaniu mandatowym,
            określona na podstawie odrębnych przepisów.
            {lastKpwTitle && (
              <p className={styles.legalActsTitle}>
                Art. 96 § 1 {lastKpwTitle}
              </p>
            )}
          </li>
        </ol>
      </div>
    </FieldsetCustom>
  );
}
