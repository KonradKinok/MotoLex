import { useRef } from "react";
import type { AppResource } from "../../context/AppContext";
import type { LegalActsTable } from "../Api/ApiPolishLaws/apiPolishRegulationData";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import { Loader } from "../Loader/Loader";
import styles from "./LawPolish.module.scss";
import { ButtonExpand } from "../CustomControls/ButtonExpand/ButtonExpand";
import { useToggle } from "../../hooks/useToggle";
import { useId } from "react";
import { ButtonRefresh } from "../CustomControls/ButtonRefresh/ButtonRefresh";
type LawsPageProps = {
  legalActs: AppResource<LegalActsTable>;
};

export function LawPolish({ legalActs }: LawsPageProps) {
  const articleRef = useRef<HTMLElement>(null);
  const {
    value: isExpandedArticle,
    toggle: toggleExpandArticle,
    enable: expandArticle,
  } = useToggle();
  const id = useId();
  const titleId = `${id}-title`;
  const contentId = `${id}-full-content`;
  const getActName = legalActs.data?.at(-1)?.title ?? "Nieznany akt prawny";
  const actName = getActName.replace("(tekst ujednolicony)", "").trim();

  return (
    <article
      className={styles.lawPolishMainContainer}
      ref={articleRef}
      aria-labelledby={titleId}
    >
      <FieldsetCustom
        legend={`Stan na: ${legalActs.date ?? ""} ${legalActs.time ?? ""}`}
      >
        <div className={styles.headerContainer}>
          <h2 id={titleId} className={styles.headerText}>
            {actName}
          </h2>
          <div className={styles.utilityButtonContainer}>
            <ButtonExpand
              isExpanded={isExpandedArticle}
              contentId={contentId}
              toggle={toggleExpandArticle}
            />
            <ButtonRefresh
              disabled={legalActs.loading}
              onClick={() => {
                expandArticle();
                void legalActs.refresh();
              }}
            />
          </div>
        </div>
        <div
          id={contentId}
          className={styles.expandableContent}
          data-expanded={isExpandedArticle}
          aria-hidden={!isExpandedArticle}
          inert={!isExpandedArticle}
        >
          <div className={styles.expandableInner}>
            {legalActs.loading ? (
              <Loader />
            ) : (
              legalActs.data !== null &&
              (legalActs.data.length === 0 ? (
                <p>Brak aktów prawnych.</p>
              ) : (
                <ul className={styles.actsList}>
                  {legalActs.data.map((act, index) => (
                    <li
                      key={`${act.ELI}-${index}`}
                      className={styles.itemActsList}
                    >
                      <p className={styles.paragraph}>
                        {act.title} ({act.displayAddress}){" "}
                      </p>
                      <div className={styles.linkContainer}>
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
              ))
            )}

            {legalActs.error && (
              <p role="alert">Nie udało się pobrać danych: {legalActs.error}</p>
            )}
          </div>
        </div>
      </FieldsetCustom>
    </article>
  );
}
