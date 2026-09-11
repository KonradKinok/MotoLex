import type { RegulationProps } from "./legalRegulationsTable";
import styles from "./RegulationsStyle.module.scss";

function formatDate(date: string) {
  // Daty z tabeli mają format YYYY-MM-DD.
  return date.split("-").reverse().join(".");
}

//Tablica: załącznik II część 2 sekcja C: pkt 2. Cyfra kontrolna: art.1.1
const assignValueVinTable = [
  ["A = 1", "J = 1", "S = 2"],
  ["B = 2", "K = 2", "T = 3"],
  ["C = 3", "L = 3", "U = 4"],
  ["D = 4", "M = 4", "V = 5"],
  ["E = 5", "N = 5", "W = 6"],
  ["F = 6", "P = 7", "X = 7"],
  ["G = 7", "R = 9", "Y = 8"],
  ["H = 8", "", "Z = 9"],
];
//Tablica: załącznik II część 2 sekcja C: pkt 2. Cyfra kontrolna: art.1.2
const itemWeightVinTable = [
  ["1. = 8", "10. = 9"],
  ["2. = 7", "11. = 8"],
  ["3. = 6", "12. = 7"],
  ["4. = 5", "13. = 6"],
  ["5. = 4", "14. = 5"],
  ["6. = 3", "15. = 4"],
  ["7. = 2", "16. = 3"],
  ["8. = 10", "17. = 2"],
  ["9. = cyfra kontrolna", ""],
];
//Tablica: załącznik II część 2 sekcja C: pkt 2. Cyfra kontrolna: art.1.4
const checkDigitVinTable = {
  header: [
    "Cyfra kontrolna",
    "Reszta ułamkowa",
    "Równowartość dziesiętna reszty",
  ],
  table: [
    ["0", "0", "0"],
    ["1", "1/11", "0,091"],
    ["2", "2/11", "0,182"],
    ["3", "3/11", "0,273"],
    ["4", "4/11", "0,364"],
    ["5", "5/11", "0,455"],
    ["6", "6/11", "0,545"],
    ["7", "7/11", "0,636"],
    ["8", "8/11", "0,727"],
    ["9", "9/11", "0,818"],
    ["X", "10/11", "0,909"],
  ],
};
export default function Regulation001Vin({
  id,
  title,
  startDate,
  endDate,
  legalActs,
}: RegulationProps) {
  const titleId = `${id}-title`;
  const CELEX_02021R0535 = legalActs.find(
    ({ act }) => act.celexNumber === "02021R0535",
  );

  if (!CELEX_02021R0535) {
    return (
      <article id={id} aria-labelledby={titleId}>
        <h2 id={titleId}>{title}</h2>
        <p>Treść artykułu jest chwilowo niedostępna.</p>
      </article>
    );
  }

  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className={styles.articleMainContainer}
    >
      <header>
        <p className={styles.borderTopText}>
          Obowiązuje od{" "}
          <time dateTime={startDate}>{formatDate(startDate)}</time>
          {endDate && (
            <>
              {" "}
              do <time dateTime={endDate}>{formatDate(endDate)}</time>
            </>
          )}
        </p>
        <h2 id={titleId}>{title}</h2>
      </header>

      <div className={styles.legislationActNameContainer}>
        <h3>
          Akt prawny: [CELEX:{" "}
          <a
            href={CELEX_02021R0535.act.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {CELEX_02021R0535.act.celexNumber}
          </a>
          ]
        </h3>
        <div className={styles.legislationActTitleContainer}>
          <p>{CELEX_02021R0535.act.title}</p>
          <p>[{CELEX_02021R0535.references.join("; ")}]</p>
        </div>
      </div>

      <div className={styles.legalProvisionsMainContainer}>
        <h3>Przepisy:</h3>
        <div className={styles.legalProvisionsContainer}>
          <blockquote cite={CELEX_02021R0535.act.sourceUrl}>
            <h4 className={styles.blockquoteHeader}>rozdział I art.1 pkt 1:</h4>
            <p className={styles.paragraph}>
              W niniejszym rozporządzeniu ustanawia się przepisy dotyczące
              jednolitych procedur i specyfikacji technicznych w zakresie
              homologacji typu UE pojazdów kategorii M, N i O oraz układów,
              komponentów i oddzielnych zespołów technicznych zgodnie z art. 4
              ust. 7, art. 8 ust. 3 oraz art. 10 ust. 3 rozporządzenia
              Parlamentu Europejskiego i Rady (UE) 2019/2144.
            </p>
          </blockquote>
          <blockquote cite={CELEX_02021R0535.act.sourceUrl}>
            <h4 className={styles.blockquoteHeader}>rozdział I art.2 pkt 4:</h4>
            <p className={styles.paragraph}>
              "numer identyfikacyjny pojazdu" (VIN) oznacza alfanumeryczny kod
              przypisany pojazdowi przez producenta w celu zapewnienia właściwej
              identyfikacji każdego pojazdu;
            </p>
          </blockquote>
          <blockquote cite={CELEX_02021R0535.act.sourceUrl}>
            <h4 className={styles.blockquoteHeader}>
              rozdział V art.12 pkt 2:
            </h4>
            <p className={styles.paragraph}>
              Ze skutkiem od dnia 7 lipca 2026 r. organy krajowe odmawiają, z
              przyczyn związanych z cyfrą kontrolną numeru identyfikacyjnego
              pojazdu, rejestracji, wprowadzania do obrotu i dopuszczenia
              pojazdów, które nie są zgodne ze specyfikacjami technicznymi
              określonymi w załączniku II część 2 sekcja C w odniesieniu do
              odpowiednich wymagań wymienionych w załączniku II do
              rozporządzenia (UE) 2019/2144.
            </p>
          </blockquote>
          <blockquote cite={CELEX_02021R0535.act.sourceUrl}>
            <h4 className={styles.blockquoteHeader}>
              załącznik II część 2 sekcja A pkt 2. Numer identyfikacyjny pojazdu
              (VIN)
            </h4>
            <p className={styles.paragraph}>
              2.0.1. Każdy pojazd oznacza się numerem VIN.
            </p>
            <p className={styles.paragraph}>
              2.0.2. VIN jest niepowtarzalny i nieodwołalnie przypisany do
              danego pojazdu.
            </p>
            <p className={styles.paragraph}>
              2.0.3. VIN umieszcza się na podwoziu lub na pojeździe w momencie,
              gdy samochód opuszcza linię produkcyjną.
            </p>
            <p className={styles.paragraph}>
              2.1. VIN musi składać się z następujących trzech członów i cyfry
              kontrolnej: <br />
              (a) światowy kod identyfikujący producenta (WMI);
              <br />
              (b) człon opisujący pojazd (VDS);
              <br />
              (c) człon identyfikujący pojazd (VIS).
            </p>
            <p className={styles.paragraph}>
              2.2. WMI musi składać się z kodu producenta pojazdu, który
              umożliwia identyfikację producenta.
            </p>
            <p className={styles.paragraph}>
              2.2.1. Kod ten musi składać się z trzech znaków alfanumerycznych,
              wielkich liter alfabetu łacińskiego lub cyfr arabskich, nadanych
              przez właściwy organ państwa, w którym znajduje się siedziba
              główna producenta.
            </p>
            <p className={styles.paragraph}>
              2.2.2. Właściwy organ musi podejmować działania w porozumieniu z
              organizacją międzynarodową określoną w normie ISO 3780:2009
              "Pojazdy drogowe. Światowy kod identyfikujący producenta (WMI)".
            </p>
            <p className={styles.paragraph}>
              2.2.3. Jeżeli całkowita produkcja producenta wynosi mniej niż 500
              pojazdów rocznie, trzecim znakiem jest zawsze "9". Aby
              zidentyfikować takich producentów, właściwy wyżej wymieniony
              organ, o którym mowa w pkt 2.2, musi wyznaczyć też trzeci, czwarty
              i piąty znak VIS.
            </p>
            <p className={styles.paragraph}>
              2.3. VDS musi składać się z pięciu znaków alfanumerycznych,
              wielkich liter alfabetu łacińskiego lub cyfr arabskich, które
              opisują ogólne cechy pojazdu. Jeżeli producent nie wykorzystuje co
              najmniej jednego z pięciu znaków, w niewykorzystane miejsca należy
              wstawić znaki alfanumeryczne wybrane przez producenta, aby
              całkowita liczba wymaganych znaków wynosiła pięć.
            </p>
            <p className={styles.paragraph}>
              2.4. Na dziewiątej pozycji w VIN znajduje się cyfra kontrolna,
              która jest matematycznie poprawna zgodnie ze wzorem określonym w
              sekcji C.
            </p>
            <p className={styles.paragraph}>
              2.5. VIS musi składać się z ośmiu znaków alfanumerycznych,
              wielkich liter alfabetu łacińskiego lub cyfr arabskich, przy czym
              cztery ostatnie znaki to wyłącznie cyfry. VIS, wraz z numerami WMI
              i VDS, musi umożliwiać jednoznaczną identyfikację danego pojazdu.
              W każde niewykorzystane miejsce należy wstawić cyfrę "0", aby
              całkowita liczba znaków wynosiła osiem.
            </p>
            <p className={styles.paragraph}>
              2.6. Wysokość znaków w VIN umieszczonym na podwoziu nie powinna
              być mniejsza niż 7 mm.
            </p>
            <p className={styles.paragraph}>
              2.7. Między znakami nie może występować przerwa.
            </p>
            <p className={styles.paragraph}>
              2.8. Wykorzystywanie liter "I", "O" lub "Q" jest zabronione.
            </p>
          </blockquote>
          <blockquote cite={CELEX_02021R0535.act.sourceUrl}>
            <h4 className={styles.blockquoteHeader}>
              załącznik II część 2 sekcja C pkt 2. Cyfra kontrolna:
            </h4>
            <p className={styles.paragraph}>
              1. Cyfrę kontrolną określa się poprzez przeprowadzenie obliczeń
              matematycznych określonych w pkt 1.1-1.4.
            </p>
            <p id={`${id}-vin-values-description`} className={styles.paragraph}>
              1.1. Do każdej liczby w VIN należy przypisać jej rzeczywistą
              wartość matematyczną, a do każdej litery przypisać określoną
              poniżej wartość:
            </p>
            <table
              aria-labelledby={`${id}-vin-values-description`}
              className={`${styles.table} ${styles.paragraph}`}
            >
              <tbody>
                {assignValueVinTable.map((row, index) => {
                  return (
                    <tr key={`${index}-row-1.1`}>
                      {row.map((cell, index) => {
                        return (
                          <td
                            key={`${index}-cell-1.1`}
                            className={styles.tableCell}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p
              id={`${id}-vin-weights-description`}
              className={styles.paragraph}
            >
              1.2. Należy pomnożyć przypisaną wartość dla każdego znaku w VIN
              przez wagę pozycji określoną poniżej:
            </p>
            <table
              aria-labelledby={`${id}-vin-weights-description`}
              className={`${styles.table} ${styles.paragraph}`}
            >
              <tbody>
                {itemWeightVinTable.map((row, index) => {
                  return (
                    <tr key={`${index}-row-1.2`}>
                      {row.map((cell, index) => {
                        return (
                          <td
                            key={`${index}-cell-1.2`}
                            className={styles.tableCell}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className={styles.paragraph}>
              1.3. Należy dodać otrzymane iloczyny i podzielić sumę przez 11.
            </p>
            <p
              id={`${id}-vin-check-digit-description`}
              className={styles.paragraph}
            >
              1.4. Cyfra kontrolna (cyfra od 0 do 9 lub litera X) wynika z
              reszty ułamkowej albo z równoważności dziesiętnej reszty
              (zaokrąglonej do najbliższej części tysięcznej), zgodnie z
              poniższą tabelą.
            </p>
            <table
              aria-labelledby={`${id}-vin-check-digit-description`}
              className={`${styles.table} ${styles.paragraph}`}
            >
              <thead>
                <tr key={`-1-row-th-1.4`}>
                  {checkDigitVinTable.header.map((cell, index) => {
                    return (
                      <th
                        scope="col"
                        key={`${index}-cell-th-1.4`}
                        className={styles.tableCell}
                      >
                        {cell}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {checkDigitVinTable.table.map((row, index) => {
                  return (
                    <tr key={`${index}-row-td-1.4`}>
                      {row.map((cell, index) => {
                        return (
                          <td
                            key={`${index}-cell-td-1.4`}
                            className={styles.tableCell}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </blockquote>
        </div>
      </div>

      <div className={styles.legalProvisionsMainContainer}>
        <h3>Objaśnienia:</h3>
        <div className={styles.legalProvisionsContainer}>
          <p className={styles.paragraph}>
            ISO 3779:2009 (Pojazdy drogowe - Numer identyfikacyjny pojazdu (VIN)
            - Części składowe i budowa)
            <br />
            4.5 Znaki: Cyfry arabskie i wielkie litery alfabetu łacińskiego
            stosowane w numerze VIN ogranicza się do następujących: 1 2 3 4 5 6
            7 8 9 0 A B C D E F G H J K L M N P R S T U V W X Y Z<br />
            Liter I, O oraz Q nie należy stosować.
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <h3>Podstawa prawna:</h3>

        <ul className={styles.listFooter}>
          {legalActs.map(({ act, references }) => (
            <li key={act.celexNumber}>
              <p>{act.title}</p>
              <p>[{references.join("; ")}]</p>
              <p>
                EUR-Lex{" "}
                <a
                  href={act.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  (link)
                </a>
              </p>
              <p>
                LEX:{" "}
                <a
                  href={act.lexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  (link)
                </a>
              </p>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
