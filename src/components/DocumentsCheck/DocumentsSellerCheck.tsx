import { useId } from "react";
import agreementImg from "../../assets/images/documentsCheck/umowaKupna.png";
import drSecondPage from "../../assets/images/documentsCheck/DR_dane_wlasciciela.jpg";
import styles from "./DocumentsSellerCheck.module.scss";

const comparisonRows = [
  {
    label: "Imię i nazwisko",
    agreement: ["Jaromir Tomaszewski"],
    registration: ["Ireneusz Kamiński"],
  },
  { label: "PESEL", agreement: ["92102192118"], registration: ["00222340856"] },
  {
    label: "Adres",
    agreement: ["ul. Lipowa 1", "64-742 Brzezinowo"],
    registration: ["ul. Słoneczna 7", "64-742 Brzezinowo"],
  },
];

export default function DocumentsSellerCheck() {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <article className={styles.documentsSellerCheckMainContainer}>
      <div>
        <h4>
          3️⃣ DANE SPRZEDAJĄCEGO - porównaj umowę z dowodem rejestracyjnym 📄
        </h4>
        <p>
          🔍 Porównaj dane sprzedającego na umowie z danymi właściciela w
          dowodzie rejestracyjnym. Sprawdź imię i nazwisko lub nazwę firmy,
          PESEL lub REGON oraz adres.
        </p>
        <p>
          ⚠️ Sprzedający to inna osoba niż ta wpisana w dowodzie? Zwykle
          potrzebujesz także wcześniejszych umów lub faktur. Powinno z nich
          wynikać, kto komu przekazywał pojazd — od właściciela wpisanego w
          dowodzie aż do Ciebie.
        </p>
        <p>
          📄 To tzw. łańcuszek własności. Na przykład: osoba wpisana w dowodzie
          sprzedała auto sprzedającemu, a on sprzedał je Tobie. W takim
          przypadku potrzebujesz obu umów.
        </p>

        <p>
          ❓ Nie zgadza się tylko adres, nazwisko albo widzisz literówkę?
          Zapytaj sprzedającego, skąd ta różnica.
        </p>
        <p>📝 Sprawdź też, czy na umowach są podpisy obu stron.</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 340"
        className={styles.documentsSvg}
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <title id={titleId}>
          Porównanie danych sprzedającego w umowie i dowodzie rejestracyjnym
        </title>
        <desc id={descriptionId}>
          Po lewej znajduje się fragment umowy, po prawej fragment dowodu
          rejestracyjnego z polami C.1 i C.2. Czerwone ramki wskazują dane
          porównywane w tabeli. Na umowie wpisano Jaromira Tomaszewskiego, PESEL
          92102192118, adres ul. Lipowa 1, 64-742 Brzezinowo. W dowodzie wpisano
          Ireneusza Kamińskiego, PESEL 00222340856, adres ul. Słoneczna 7,
          64-742 Brzezinowo. Wszystkie trzy porównywane pozycje różnią się;
          oznaczono je krzyżykiem.
        </desc>

        {/* Widoczna tylko górna część oryginalnej umowy. */}
        <g className={styles.documentShadow}>
          <svg
            x={25}
            y={15}
            width={440}
            height={203}
            viewBox="0 0 440 203"
            overflow="hidden"
          >
            <image
              href={agreementImg}
              width={440}
              height={287}
              preserveAspectRatio="xMinYMin meet"
            />
          </svg>
        </g>

        <image
          href={drSecondPage}
          className={styles.documentShadow}
          x={490}
          y={15}
          width={195}
          height={283}
          preserveAspectRatio="xMinYMin meet"
        />

        <g fill="none" strokeWidth={2} strokeLinejoin="round">
          <rect
            x={33}
            y={45}
            width={421}
            height={41}
            rx={6}
            className={styles.documentFrame}
          />
          <rect
            x={494}
            y={21}
            width={181}
            height={100}
            rx={15}
            className={styles.documentFrame}
          />
          <path d="M 33 65 H 8 V 270 H 40" className={styles.connectionLine} />
          <path
            d="M 494 83 H 475 V 270 H 450"
            className={styles.connectionLine}
          />
        </g>

        {/* Tabela jest tekstem i geometrią SVG, nie obrazkiem. */}
        <g className={styles.comparisonTable}>
          <rect
            x={40}
            y={230}
            width={410}
            height={100}
            className={styles.tableBackground}
          />
          <rect
            x={40}
            y={230}
            width={410}
            height={20}
            className={styles.tableHeaderBackground}
          />
          <path
            d="M 40 230 H 450 V 330 H 40 Z M 66 230 V 330 M 161 230 V 330 M 286 230 V 330 M 411 230 V 330 M 40 250 H 450 M 40 272 H 450 M 40 294 H 450"
            className={styles.tableGrid}
          />
          <g className={styles.tableHeader} textAnchor="middle">
            <text x={53} y={244}>
              Lp.
            </text>
            <text x={113} y={244}>
              Dane
            </text>
            <text x={223} y={244}>
              Umowa
            </text>
            <text x={348} y={244}>
              Dowód rejestracyjny
            </text>
            <text x={430} y={244}>
              ≠
            </text>
          </g>
          {comparisonRows.map((row, index) => {
            const y = 265 + index * 22;
            return (
              <g key={row.label}>
                <text x={53} y={y} textAnchor="middle">
                  {index + 1}.
                </text>
                <text x={71} y={y}>
                  {row.label}
                </text>
                <text x={166} y={y}>
                  {row.agreement.map((line, lineIndex) => (
                    <tspan key={line} x={166} dy={lineIndex === 0 ? 0 : 11}>
                      {line}
                    </tspan>
                  ))}
                </text>
                <text x={291} y={y}>
                  {row.registration.map((line, lineIndex) => (
                    <tspan key={line} x={291} dy={lineIndex === 0 ? 0 : 11}>
                      {line}
                    </tspan>
                  ))}
                </text>
                <text
                  x={430}
                  y={y + 1}
                  textAnchor="middle"
                  className={styles.differenceMark}
                >
                  ×
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </article>
  );
}
