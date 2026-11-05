import type { AppResource } from "../../context/AppContext";
import { useAppContext } from "../../hooks/useAppContext";
import type { LegalActsTable } from "../Api/ApiPolishLaws/apiPolishRegulationData";
import { ButtonRefresh } from "../CustomControls/ButtonRefresh/ButtonRefresh";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import { getTodayToString } from "../globalFunctions/globalFunctions";
import { Loader } from "../Loader/Loader";
import styles from "./LawPolishRecent.module.scss";

export function LawPolishRecent() {
  const { recentPolishLaws } = useAppContext();
  const legalActs = getRecentAct(recentPolishLaws);
  const hasNoRecentActs =
    !legalActs.loading &&
    !legalActs.error &&
    legalActs.date !== null &&
    legalActs.data?.length === 0;

  return (
    <section className={styles.lawPolishRecentContainer}>
      <FieldsetCustom
        legend={`Przepisy prawne. Stan na: ${legalActs.date ?? ""} ${legalActs.time ?? ""}`}
      >
        <div className={styles.utilityButtonContainer}>
          {hasNoRecentActs && <p>W ostatnim tygodniu nic się nie działo.</p>}
          <ButtonRefresh
            disabled={legalActs.loading}
            onClick={() => {
              void legalActs.refresh();
            }}
          />
        </div>
        {legalActs.loading ? (
          <Loader />
        ) : (
          <>
            {legalActs.error && (
              <p role="alert">Nie udało się pobrać danych: {legalActs.error}</p>
            )}
            {legalActs.data !== null &&
              (legalActs.data.length === 0 ? null : (
                <ul className={styles.actsList}>
                  {legalActs.data.map((act, index) => (
                    <li
                      key={`${act.ELI}-${index}`}
                      className={styles.itemActsList}
                    >
                      <p className={styles.paragraph}>
                        {act.title} ({act.displayAddress})
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
              ))}
          </>
        )}
      </FieldsetCustom>
    </section>
  );
}

function getRecentAct(
  resources: readonly AppResource<LegalActsTable>[],
): AppResource<LegalActsTable> {
  const loading = resources.some((resource) => resource.loading);

  const allFailed =
    resources.length > 0 &&
    resources.every((resource) => resource.error !== null);

  const error =
    !loading && allFailed
      ? [...new Set(resources.map((resource) => resource.error!))].join("; ")
      : null;

  const latest = resources.reduce<AppResource<LegalActsTable> | null>(
    (latest, resource) => {
      if (resource.data === null || !resource.date) return latest;
      if (!latest) return resource;

      const resourceStamp = `${resource.date}T${resource.time ?? "00:00:00"}`;

      const latestStamp = `${latest.date}T${latest.time ?? "00:00:00"}`;

      return resourceStamp > latestStamp ? resource : latest;
    },
    null,
  );

  let data: LegalActsTable = [];

  if (latest?.date) {
    const [year, month, day] = latest.date.split("-").map(Number);
    const startDate = new Date(year, month - 1, day);

    // Dzień ostatniego zapisu i sześć wcześniejszych dni.
    startDate.setDate(startDate.getDate() - 6);

    const from = getTodayToString(startDate);
    const to = latest.date;
    const seen = new Set<string>();

    data = resources
      .flatMap((resource) => resource.data ?? [])
      .filter((act) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(act.promulgation)) {
          return false;
        }

        if (act.promulgation < from || act.promulgation > to) {
          return false;
        }

        const key = act.ELI || act.address;

        if (key && seen.has(key)) return false;
        if (key) seen.add(key);

        return true;
      })
      .sort((a, b) => b.promulgation.localeCompare(a.promulgation));
  }

  return {
    data,
    date: latest?.date ?? null,
    time: latest?.time ?? null,
    loading,
    error,
    refresh: async () => {
      await Promise.all(resources.map((resource) => resource.refresh()));
    },
  };
}
