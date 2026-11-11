import type { LegalActsTable } from "../Api/ApiPolishLaws/apiPolishRegulationData";
import styles from "./LegalActsList.module.scss";

type LegalActsListProps = {
  acts: LegalActsTable;
};

export function LegalActsList({ acts }: LegalActsListProps) {
  if (!acts.length) return null;

  return (
    <ul className={styles.actsList}>
      {acts.map((act) => (
        <li key={act.id} className={styles.itemActsList}>
          <p className={styles.paragraph}>
            {act.title} ({act.displayAddress}){" "}
            {!act.title?.includes("(tekst ujednolicony)") && (
              <span>[data ogłoszenia: {act.promulgation}]</span>
            )}
          </p>
          <div className={styles.linkContainer}>
            {act.pageDzU && (
              <a
                href={act.pageDzU}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Strona DzU
              </a>
            )}
            {act.textPDF && (
              <a
                href={act.textPDF}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                PDF
              </a>
            )}

            {act.textHTML && (
              <a
                href={act.textHTML}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                HTML
              </a>
            )}

            {act.textDetails && (
              <a
                href={act.textDetails}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Szczegóły
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
