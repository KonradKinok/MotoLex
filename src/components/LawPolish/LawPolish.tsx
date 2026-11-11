import type { AppResource } from "../../context/AppContext";
import type { LegalActsTable } from "../Api/ApiPolishLaws/apiPolishRegulationData";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import { Loader } from "../Loader/Loader";
import styles from "./LawPolish.module.scss";
import { ButtonExpand } from "../CustomControls/ButtonExpand/ButtonExpand";
import { useToggle } from "../../hooks/useToggle";
import { useId } from "react";
import { ButtonRefresh } from "../CustomControls/ButtonRefresh/ButtonRefresh";
import { LegalActsList } from "./LegalActsList";
type LawsPageProps = {
  legalActs: AppResource<LegalActsTable>;
};

export function LawPolish({ legalActs }: LawsPageProps) {
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
                <LegalActsList acts={legalActs.data} />
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
