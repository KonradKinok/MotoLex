import type { RegulationProps } from "./legalRegulationsTable";
import styles from "./RegulationsStyle.module.scss";

function formatDate(date: string) {
  // Daty z tabeli mają format YYYY-MM-DD.
  return date.split("-").reverse().join(".");
}

export default function Regulation001Vin({
  id,
  title,
  startDate,
  endDate,
  legalActs,
}: RegulationProps) {
  const titleId = `${id}-title`;
  const CELEX_02021R0535 = 0 as const;
  const act = legalActs.find(
    ({ act }) => act.celexNumber === "02021R0535",
  )?.act;
  return (
    <article id={id} aria-labelledby={titleId} className={styles.article}>
      <header>
        <p className={styles.period}>
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

      <div className={styles.content}>
        <div>
          <h3 id={`${id}-tytul`}>
            Akt prawny: [CELEX:{" "}
            <a
              href={legalActs[CELEX_02021R0535]?.act.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {legalActs[CELEX_02021R0535]?.act.celexNumber}
            </a>
            ]
          </h3>
          <p>{legalActs[CELEX_02021R0535]?.act.title}</p>
        </div>

        <div>
          <h3>Przepisy:</h3>
          <blockquote cite={legalActs[CELEX_02021R0535]?.act.sourceUrl}>
            <h4>art.2 pkt 4:</h4>
            <p>
              "numer identyfikacyjny pojazdu" (VIN) oznacza alfanumeryczny kod
              przypisany pojazdowi przez producenta w celu zapewnienia właściwej
              identyfikacji każdego pojazdu;
            </p>
          </blockquote>
          <blockquote cite={legalActs[CELEX_02021R0535]?.act.sourceUrl}>
            <h4>
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
            <p>
              2.2. WMI musi składać się z kodu producenta pojazdu, który
              umożliwia identyfikację producenta.
            </p>
            <p>
              2.2.1. Kod ten musi składać się z trzech znaków alfanumerycznych,
              wielkich liter alfabetu łacińskiego lub cyfr arabskich, nadanych
              przez właściwy organ państwa, w którym znajduje się siedziba
              główna producenta.
            </p>
            <p>
              2.2.2. Właściwy organ musi podejmować działania w porozumieniu z
              organizacją międzynarodową określoną w normie ISO 3780:2009
              "Pojazdy drogowe. Światowy kod identyfikujący producenta (WMI)".
            </p>
            <p>
              2.2.3. Jeżeli całkowita produkcja producenta wynosi mniej niż 500
              pojazdów rocznie, trzecim znakiem jest zawsze "9". Aby
              zidentyfikować takich producentów, właściwy wyżej wymieniony
              organ, o którym mowa w pkt 2.2, musi wyznaczyć też trzeci, czwarty
              i piąty znak VIS.
            </p>
            <p>
              2.3. VDS musi składać się z pięciu znaków alfanumerycznych,
              wielkich liter alfabetu łacińskiego lub cyfr arabskich, które
              opisują ogólne cechy pojazdu. Jeżeli producent nie wykorzystuje co
              najmniej jednego z pięciu znaków, w niewykorzystane miejsca należy
              wstawić znaki alfanumeryczne wybrane przez producenta, aby
              całkowita liczba wymaganych znaków wynosiła pięć.
            </p>
            <p>
              2.2. WMI musi składać się z kodu producenta pojazdu, który
              umożliwia identyfikację producenta.
            </p>
          </blockquote>
        </div>

        <div>
          <h3 id={`${id}-objasnienia`}>Objaśnienia</h3>
          <p>Tutaj umieść własny komentarz, oddzielony od cytatu.</p>
        </div>
      </div>

      <footer>
        <h3>Podstawa prawna</h3>

        <ul>
          {legalActs.map(({ act, references }) => (
            <li key={act.celexNumber}>
              <cite>
                <a href={act.sourceUrl}>{act.title}</a>
              </cite>

              <p>{references.join("; ")}</p>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
