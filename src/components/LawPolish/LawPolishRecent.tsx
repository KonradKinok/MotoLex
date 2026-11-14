import { Link } from "react-router";
import type { AppResource } from "../../context/AppContext";
import { useAppContext } from "../../hooks/useAppContext";
import type { LegalActsTable } from "../Api/ApiPolishLaws/apiPolishRegulationData";
import { ButtonRefresh } from "../CustomControls/ButtonRefresh/ButtonRefresh";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import {
  getTodayToString,
  isValidDateString,
} from "../globalFunctions/globalFunctions";
import { Loader } from "../Loader/Loader";
import styles from "./LawPolishRecent.module.scss";
import { LegalActsList } from "./LegalActsList";
import { ROUTES } from "../../config/routes";

export function LawPolishRecent() {
  const { recentPolishLaws } = useAppContext();
  const numberOfDays = 30; // Liczba dni do wyświetlenia ostatnich aktów prawnych
  const legalActs = getRecentAct(recentPolishLaws, numberOfDays);
  const hasNoRecentActs =
    !legalActs.loading &&
    !legalActs.error &&
    legalActs.date !== null &&
    legalActs.data?.length === 0;

  return (
    <section className={styles.lawPolishRecentContainer}>
      <FieldsetCustom legend={`Przepisy prawne`}>
        <h2>
          Ostatnio opublikowane akty prawne dotyczące rejestracji pojazdów.
        </h2>
        <p>
          Poniżej znajdziesz wybrane akty prawne dotyczące rejestracji pojazdów,
          ogłoszone w ciągu ostatnich {numberOfDays} dni. Przycisk "Odśwież"
          ponownie pobiera dane monitorowanych aktów prawnych i aktualizuje
          listę. Lista codziennie aktualizuje się automatycznie. Linki pod
          każdym aktem prowadzą do jego strony w Dzienniku Ustaw ("Strona DzU"),
          dokumentu PDF, treści HTML lub strony ze szczegółowymi informacjami
          ("Szczegóły"). Data i godzina "Stan na" wskazują ostatnie udane
          pobranie danych. Dostępność linków zależy od danego dokumentu. Lista
          obejmuje wybrane przepisy i nie stanowi pełnego wykazu zmian w prawie.
        </p>
        <p>
          Więcej aktów prawnych znajdziesz{" "}
          <Link className={styles.link} to={ROUTES.laws}>
            tutaj
          </Link>
          .
        </p>

        <FieldsetCustom
          legend={`Przepisy prawne. Stan na: ${legalActs.date ?? ""} ${legalActs.time ?? ""}`}
        >
          <div className={styles.utilityButtonContainer}>
            <div>
              {hasNoRecentActs && (
                <p>W ostatnich {numberOfDays} dniach nic się nie działo.</p>
              )}
              <p>
                Najnowsze przepisy znajdziesz na stronie Rządowego Centrum
                Legislacji:{" "}
                <a
                  className={styles.link}
                  href="https://dziennikustaw.gov.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dziennikustaw.gov.pl/
                </a>
              </p>
            </div>
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
                <p role="alert">
                  Nie udało się pobrać danych: {legalActs.error}
                </p>
              )}

              {legalActs.data !== null && (
                <LegalActsList acts={legalActs.data} />
              )}
            </>
          )}
        </FieldsetCustom>
      </FieldsetCustom>
    </section>
  );
}

function getRecentAct(
  resources: readonly AppResource<LegalActsTable>[],
  numberOfDays: number = 30,
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
      if (
        resource.data === null ||
        !resource.date ||
        !isValidDateString(resource.date)
      ) {
        return latest;
      }
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
    startDate.setDate(startDate.getDate() - numberOfDays);

    const from = getTodayToString(startDate);
    const to = latest.date;
    const seen = new Set<string>();

    data = resources
      .flatMap((resource) => resource.data ?? [])
      .filter((act) => {
        if (!isValidDateString(act.promulgation)) {
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
