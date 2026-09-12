import { useRef } from "react";
import { ButtonClipboard } from "../components/CustomControls/ButtonClipboard/ButtonClipboard";
import type { LegalRegulationTable } from "./legalRegulationsTable";
import styles from "./RegulationsStyle.module.scss";
import { useToggle } from "../hooks/useToggle";
import { ButtonExpand } from "../components/CustomControls/ButtonExpand/ButtonExpand";

function formatDate(date: string) {
  // Daty z tabeli mają format YYYY-MM-DD.
  return date.split("-").reverse().join(".");
}

export default function Regulation002Vin({
  id,
  title,
  shortContent,
  startDate,
  endDate,
  legalActs,
}: LegalRegulationTable) {
  const articleRef = useRef<HTMLElement>(null);
  const { value: isExpandedArticle, toggle: toggleExpandArticle } = useToggle();

  const titleId = `${id}-title`;
  const contentId = `${id}-full-content`;

  const CELEX_02015R0504 = legalActs.find(
    ({ act }) => act.celexNumber === "02015R0504",
  );
  if (!CELEX_02015R0504) {
    return (
      <article
        id={id}
        aria-labelledby={titleId}
        className={styles.articleMainContainer}
      >
        <h2 id={titleId}>{title}</h2>
        <p>Treść artykułu jest chwilowo niedostępna.</p>
      </article>
    );
  }

  return (
    <article
      ref={articleRef}
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
        <div className={styles.copyButtonPosition}>
          <ButtonExpand
            isExpanded={isExpandedArticle}
            contentId={contentId}
            toggle={toggleExpandArticle}
          />
          <ButtonClipboard articleRef={articleRef} />
        </div>

        <h2 id={titleId}>{title}</h2>
        <p className={styles.paragraph}>{shortContent}</p>
      </header>

      <div
        id={contentId}
        className={styles.expandableContent}
        data-expanded={isExpandedArticle}
        aria-hidden={!isExpandedArticle}
        inert={!isExpandedArticle}
      >
        <div className={styles.expandableInner}>
          <div className={styles.fullContent}>
            <div className={styles.legislationActNameContainer}>
              <h3>
                Akt prawny: [CELEX:{" "}
                <a
                  href={CELEX_02015R0504.act.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {CELEX_02015R0504.act.celexNumber}
                </a>
                ]
              </h3>
              <div>
                <p className={styles.paragraph}>{CELEX_02015R0504.act.title}</p>
                <p className={styles.paragraph}>
                  [{CELEX_02015R0504.references.join("; ")}]
                </p>
              </div>
            </div>

            <div className={styles.legalProvisionsMainContainer}>
              <h3>Przepisy:</h3>
              <div className={styles.legalProvisionsContainer}>
                <blockquote cite={CELEX_02015R0504.act.sourceUrl}>
                  <h4 className={styles.blockquoteHeader}>
                    załącznik IV sekcja 3:
                  </h4>
                  <p className={styles.paragraph}>
                    VIN musi spełniać wymogi określone w normie ISO 10261:2002
                    (Maszyny do robót ziemnych - System numeracji
                    identyfikującej wyroby) lub w normie ISO 3779: 2009 (Pojazdy
                    drogowe - Numer identyfikacyjny pojazdu (VIN) - Części
                    składowe i budowa).
                  </p>
                </blockquote>
              </div>
            </div>

            <div className={styles.legalProvisionsMainContainer}>
              <h3>Objaśnienia:</h3>
              <div className={styles.legalProvisionsContainer}>
                <p className={styles.paragraph}>
                  ISO 3779:2009 (Pojazdy drogowe - Numer identyfikacyjny pojazdu
                  (VIN) - Części składowe i budowa)
                  <br />
                  4.5 Znaki: Cyfry arabskie i wielkie litery alfabetu
                  łacińskiego stosowane w numerze VIN ogranicza się do
                  następujących: 1 2 3 4 5 6 7 8 9 0 A B C D E F G H J K L M N P
                  R S T U V W X Y Z<br />
                  Liter I, O oraz Q nie należy stosować.
                </p>
                <p className={styles.paragraph}>
                  ISO 10261:2002 (Maszyny do robót ziemnych - System numeracji
                  identyfikującej wyroby)
                  <br />
                  4.3 Dozwolone znaki: W numerze PIN należy stosować wyłącznie
                  następujące znaki: 1 2 3 4 5 6 7 8 9 0 A B C D E F G H I J K L
                  M N O P Q R S T U V W X Y Z
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
          </div>
        </div>
      </div>
    </article>
  );
}
