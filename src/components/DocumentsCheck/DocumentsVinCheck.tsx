import { useId } from "react";
import agreementImg from "../../assets/images/documentsCheck/umowaKupna.png";
import vehicleTechnicalInspectionHalfTopImg from "../../assets/images/documentsCheck/badanieTechniczneGornaPolowa.jpg";
import drFirstPage from "../../assets/images/documentsCheck/drPierwszaStrona.jpg";

import styles from "./DocumentsVinCheck.module.scss";
export default function DocumentsVinCheck() {
  const descriptionId = useId();
  const titleId = useId();
  const theoryTextPositionX = 480;

  return (
    <article className={styles.documentsVinCheckMainContainer}>
      <div>
        <p>
          <b>1️⃣ NUMER VIN, NADWOZIA, PODWOZIA LUB RAMY</b>
        </p>
        <p>
          Numer VIN to unikalny, 17-znakowy kod składający się z liter i cyfr.
          Pełni funkcję swoistego „numeru PESEL" dla pojazdów, umożliwiając ich
          jednoznaczną identyfikację. Niektóre pojazdy są oznaczone numerem
          nadwozia, podwozia lub ramy, wtedy liczba znaków może być inna niż 17,
          ale numer musi być taki sam na wszystkich dokumentach.
        </p>
        <p>
          🔎 Gdzie go znaleźć? Numer znajdziesz w dokumentach pojazdu oraz
          bezpośrednio na pojeździe 🚘. Najszybciej znajdziesz go w dowodzie
          rejestracyjnym w rubryce oznaczonej literą „E".{" "}
        </p>
        <p>
          ⚠️ Kupując 🚗 samochód, 🏍️ motocykl lub inny pojazd koniecznie
          sprawdź, czy numer w dokumentach zgadza się z numerem umieszczonym
          fizycznie na pojeździe!
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 650"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={styles.documentsSvg}
      >
        <title id={titleId}>Porównanie numerów VIN w dokumentach pojazdu</title>
        <desc id={descriptionId}>
          Sprawdź numer VIN w dowodzie rejestracyjnym, w polu E, na umowie
          kupna-sprzedaży, na zaświadczeniu o przeprowadzonym badaniu
          technicznym oraz w pozostałych dokumentach. Numery VIN we wszystkich
          dokumentach muszą być identyczne. W pokazanym przykładzie umowa
          zawiera numer VF34PEL5XZ9703852, a dowód rejestracyjny numer
          VF34PELSXZ9703852. Różnica dotyczy ósmego znaku: na umowie jest cyfra
          5, a w dowodzie litera S. Czerwone linie i znak krzyżyka oznaczają tę
          rozbieżność. Numer VIN na zaświadczeniu o badaniu technicznym jest
          zgodny z numerem w dowodzie rejestracyjnym, co oznaczono zieloną linią
          i znakiem potwierdzenia.
        </desc>
        {/* Trzy osobne obrazki */}
        <image
          href={agreementImg}
          preserveAspectRatio="xMinYMin meet"
          className={styles.agreementImg}
        />{" "}
        <image
          href={vehicleTechnicalInspectionHalfTopImg}
          preserveAspectRatio="xMinYMin meet"
          className={styles.technicalInspectionImg}
        />
        <image
          href={drFirstPage}
          preserveAspectRatio="xMinYMin meet"
          className={styles.drImg}
        />{" "}
        {/* Ramki i linie nad obrazkami */}
        <g fill="none" strokeWidth={2} strokeLinejoin="round">
          {" "}
          <rect className={styles.agreementFrame} />{" "}
          <rect className={styles.technicalInspectionFrame} />{" "}
          <rect className={styles.registrationCertificateFrame} />{" "}
          <rect className={styles.agreementSecondFrame} />
          {/* Umowa → dowód */}
          <path
            d="M 220 163 H 475 V 505 H 511"
            className={styles.agreementLine}
          />{" "}
          {/* Umowa → dowód 2*/}
          <path
            d="M 120 163 H 5 V 620 H 211 M 555 620 H 570 V 522"
            className={styles.agreementLine}
          />{" "}
          {/* Badanie → dowód */}
          <path
            d="M 378 538 H 475 V 515 H 511"
            className={styles.technicalInspectionLine}
          />{" "}
        </g>{" "}
        {/* Oznaczenia */}
        <g fontFamily="Arial, sans-serif">
          {" "}
          <text x={455} y={500} className={styles.errorMark} fontSize={24}>
            {" "}
            x{" "}
          </text>{" "}
          <text x={455} y={535} className={styles.successMark} fontSize={22}>
            {" "}
            ✓{" "}
          </text>{" "}
          <text x={216} y={625} className={styles.vinComparison}>
            VF34PEL
            <tspan className={styles.vinDifference}>5</tspan>
            XZ9703852 <tspan className={styles.vinDifference}>≠</tspan> VF34PEL
            <tspan className={styles.vinDifference}>S</tspan>
            XZ9703852
          </text>
        </g>{" "}
        <text
          x={theoryTextPositionX}
          y={30}
          textAnchor="start"
          className={styles.vinInstructions}
        >
          <tspan x={theoryTextPositionX}>Sprawdź numer VIN na:</tspan>

          <tspan x={theoryTextPositionX} dy={20}>
            • dowodzie rejestracyjnym (pole E),
          </tspan>

          <tspan x={theoryTextPositionX} dy={20}>
            • umowie kupna-sprzedaży,
          </tspan>

          <tspan x={theoryTextPositionX} dy={20}>
            • zaświadczeniu o przeprowadzonym
          </tspan>

          <tspan x={theoryTextPositionX + 5} dy={20}>
            badaniu technicznym,
          </tspan>

          <tspan x={theoryTextPositionX} dy={20}>
            • pozostałych dokumentach.
          </tspan>

          <tspan x={theoryTextPositionX} dy={24} className={styles.vinWarning}>
            Wszystkie muszą być IDENTYCZNE!
          </tspan>
        </text>
      </svg>
    </article>
  );
}
