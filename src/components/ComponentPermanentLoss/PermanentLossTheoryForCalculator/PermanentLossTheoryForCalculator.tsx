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
    <FieldsetCustom legend={`Teoria:`}>
      <div className={styles.container}>
        <p>
          <b>Wzór:</b>
        </p>
        <p>O = W × R + 2 × S + 0,5 × M</p>
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
            <b>S (jednostkowa stawka opłaty × masa własna pojazdu w kg/1000)</b>{" "}
            - stawka opłaty za umieszczenie zużytego lub nienadającego się do
            użytkowania pojazdu na składowisku odpadów, określona na podstawie
            odrębnych przepisów,
            {lastRozStawkaOplatZaSrodowiskoTitle && (
              <>
                <p className={styles.legalActsTitle}>
                  § 3 ust. 1 Jednostkowe stawki opłaty za umieszczenie odpadów
                  na składowisku są określone w załączniku nr 2 do
                  rozporządzenia.
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
        <div className={styles.containerExplanation}>
          <p>
            Zgodnie z art. 79 ustawy z dnia 20 czerwca 1997 r. - Prawo o ruchu
            drogowym warunkiem wyrejestrowania pojazdu w przypadku,
            udokumentowanej trwałej i zupełnej utraty posiadania pojazdu bez
            zmiany w zakresie prawa własności, jest wniesienie przez właściciela
            pojazdu opłaty na rzecz gminy na realizację zadań związanych z
            utrzymaniem czystości i porządku w gminach. Wyrejestrowania pojazdu
            dokonuje organ właściwy ze względu na miejsce ostatniej rejestracji
            pojazdu. Wysokość opłaty będącej warunkiem wyrejestrowania pojazdu
            została określona w Rozporządzeniu Ministra Spraw Wewnętrznych i
            Administracji z dnia 3 kwietnia 2002 r. w sprawie wysokości opłaty
            będącej warunkiem wyrejestrowania pojazdu w przypadku
            udokumentowanej trwałej i zupełnej utraty pojazdu bez zmiany w
            zakresie prawa własności zwanym dalej "rozporządzeniem w sprawie
            wysokości opłaty", przy uwzględnieniu kosztów ponoszonych przez
            gminy związanych z usuwaniem negatywnych skutków utraty pojazdu oraz
            kosztów związanych z usuwaniem wraków.
          </p>
          <p>
            Zgodnie z § 1 ww. rozporządzenia opłatę będącą warunkiem
            wyrejestrowania pojazdu, w przypadku udokumentowanej trwałej i
            zupełnej utraty pojazdu bez zmiany w zakresie prawa własności,
            ustala się według wyżej wskazanego wzoru algorytmu.
          </p>
          <p>
            Algorytm ten odnosi się do różnego rodzaju opłat związanych z
            użytkowaniem pojazdu, tj. opłaty za wydanie dowodu rejestracyjnego,
            opłaty za umieszczenie zużytego lub nienadającego się do użytkowania
            pojazdu na składowisku odpadów, maksymalnej stawki grzywny w
            postępowaniu mandatowym. Istotnym przy tym pozostaje, iż opłaty te,
            w oparciu o które ustala się dany algorytm są określane na podstawie
            odrębnych przepisów.
          </p>
          <div className={styles.enumerationOfDefinitionsMainContainer}>
            <div>
              <p className={styles.enumerationOfDefinitionsTitle}>
                R - równowartość opłaty pobranej za wydanie dowodu
                rejestracyjnego pojazdu, określonej w odrębnych przepisach.
              </p>
              <p>
                Zgodnie z art. 71 ust. 1 ustawy z dnia 20 czerwca 1997 r. -
                Prawo o ruchu drogowym, dokumentem stwierdzającym dopuszczenie
                do ruchu pojazdu samochodowego, ciągnika rolniczego, pojazdu
                wolnobieżnego wchodzącego w skład kolejki turystycznej,
                motoroweru lub przyczepy jest dowód rejestracyjny albo
                pozwolenie czasowe. Jak wynika z art. 71 ust. 2 ww. ustawy,
                pojazdy określone w ust. 1 są dopuszczone do ruchu, jeżeli
                odpowiadają warunkom określonym w art. 66 oraz są zarejestrowane
                i zaopatrzone w zalegalizowane tablice (tablicę) rejestracyjne.
                Warunki i tryb rejestracji pojazdów oraz wzór dowodu
                rejestracyjnego, tablic rejestracyjnych oraz innych tablic, cech
                identyfikacyjnych i oznaczeń, w które zaopatruje się pojazd
                zostały określone w Rozporządzeniu Ministra Infrastruktury z
                dnia 8 listopada 2024 r. w sprawie rejestracji i oznaczania
                pojazdów, wymagań dla tablic rejestracyjnych oraz wzorów innych
                dokumentów związanych z rejestracją pojazdów. Zgodnie z § 6 ust.
                1 ww. rozporządzenia, rejestrując pojazd, z zastrzeżeniem § 17
                ust. 2, organ rejestrujący wydaje: 1) dowód rejestracyjny; 2)
                zalegalizowane tablice (tablicę) rejestracyjne, z wyjątkiem
                przypadku, o którym mowa w art. 73 ust. 1a ustawy. Wysokość
                opłaty za wydanie dowodu rejestracyjnego pojazdu określa
                Rozporządzenie Ministra Infrastruktury z dnia 4 sierpnia 2022 r.
                w sprawie wysokości opłat za wydanie dowodu rejestracyjnego,
                pozwolenia czasowego i zalegalizowanych tablic (tablicy)
                rejestracyjnych oraz ich wtórników. Zgodnie z § 2 ww.
                rozporządzenia, za wydanie dowodu rejestracyjnego pojazdu albo
                jego wtórnika organ rejestrujący pobiera opłatę w wysokości
                54,00 zł. Odnosząc powyższe do literalnego brzmienia przepisu §
                1 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji z
                dnia 3 kwietnia 2002 r. w sprawie wysokości opłaty będącej
                warunkiem wyrejestrowania pojazdu w przypadku udokumentowanej
                trwałej i zupełnej utraty pojazdu bez zmiany w zakresie prawa
                własności i wskazanej w nim wartości R, przyjąć należy, iż
                wartość ta winna być równa opłacie pobranej za wydanie dowodu
                rejestracyjnego pojazdu - tj. kwocie 54,00 zł.
              </p>
            </div>
            <div>
              <p className={styles.enumerationOfDefinitionsTitle}>
                S - stawka opłaty za umieszczenie zużytego lub nienadającego się
                do użytkowania pojazdu na składowisku odpadów, określona na
                podstawie odrębnych przepisów.
              </p>
              <p>
                W Rozporządzeniu Rady Ministrów z dnia 22 grudnia 2017 r. w
                sprawie jednostkowych stawek opłat za korzystanie ze środowiska
                (załącznik nr 2 Lp. 738; Kod odpadu: 16 01 04; Grupy, podgrupy i
                rodzaje odpadów: Zużyte lub nienadające się do użytkowania
                pojazdy), aktualizowanym przez obwieszczenie, wskazano
                jednostkową stawkę opłaty za megagram (tonę). Zwrócić należy
                uwagę, iż w ww. rozporządzeniu, prawodawca posłużył się pojęciem
                "stawki jednostkowej" wyrażonej w postaci zł/Mg, gdy tymczasem
                Rozporządzenie Ministra Spraw Wewnętrznych i Administracji z
                dnia 3 kwietnia 2002 r. w sprawie wysokości opłaty będącej
                warunkiem wyrejestrowania pojazdu w przypadku udokumentowanej
                trwałej i zupełnej utraty pojazdu bez zmiany w zakresie prawa
                własności wskazuje, iż wartość S oznacza stawkę opłaty. Według
                słownika języka polskiego stawka jednostkowa to określona
                jednostkowa wartość, służąca do obliczenia wysokości
                świadczenia. Zatem w celu wskazania stawki opłaty (wartość S) za
                umieszczenie pojazdu na składowisku odpadów konieczne jest
                pomnożenie jednostkowej stawki określonej w Rozporządzeniu Rady
                Ministrów z dnia 22 grudnia 2017 r. w sprawie jednostkowych
                stawek opłat za korzystanie ze środowiska, (jednostkowe stawki
                opłat dla poszczególnych lat są ogłaszane w odpowiednich
                obwieszczeniach), przez masę własną pojazdu w tonach
                (megagramach - Mg). Zatem wartość S stanowić będzie
                wielokrotność stawki jednostkowej uzależnionej od masy pojazdu.
              </p>
            </div>
            <div>
              <p className={styles.enumerationOfDefinitionsTitle}>
                M - maksymalna stawka grzywny w postępowaniu mandatowym,
                określona na podstawie odrębnych przepisów.
              </p>
              <p>
                Postępowanie mandatowe zostało uregulowane w ustawie z dnia 24
                sierpnia 2001 r. - Kodeks postępowania w sprawach o wykroczenia,
                w postępowaniu tym dochodzi do ukarania sprawcy wykroczenia
                mandatem karnym bezpośrednio po popełnieniu wykroczenia, bez
                konieczności kierowania sprawy do sądu. Zgodnie z art. 96 § 1
                Kodeksu postępowania w sprawach o wykroczenia, w postępowaniu
                mandatowym można nałożyć grzywnę w wysokości do 500,00 zł, a w
                przypadku, o którym mowa w art. 9 § 1 Kodeksu wykroczeń - do
                1000,00 zł. Powyższa kwota 1000,00 zł dotyczy zbiegu przepisów
                ustawy. Zatem przyjąć należy, iż maksymalna stawka grzywny w
                postępowaniu mandatowym wynosi 500,00 zł. Pozostałe przypadki
                przewidujące nałożenie grzywny w wysokości 2000,00 zł i 5000,00
                zł (art. 96 § 1a, § 1aa i § 1b Kodeksu postępowania w sprawach o
                wykroczenia) stanowią wyjątki od ogólnej zasady wyrażonej w art.
                96 § 1 Kodeksu postępowania w sprawach o wykroczenia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FieldsetCustom>
  );
}
