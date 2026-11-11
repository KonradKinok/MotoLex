import { Link, useLocation } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { useAppContext } from "../../hooks/useAppContext";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import { FieldsetCustom } from "../../components/CustomControls/FieldsetCustom/FieldsetCustom";
import { LawPolish } from "../../components/LawPolish/LawPolish";
import styles from "../PageStyles.module.scss";

export default function LawsPage() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  const {
    pord,
    rozRejestracjaPojazdow,
    rozSzczegoloweCzynnosci,
    rozOplatyZaDrPcTr,
    rozTrybLegalizacjiTrWzoryZl,
    rozProdukcjaDystrybucjaTr,
    rozCzasoweWycofanie,
    rozNadawanieCechIdentyfikacyjnych,
    rozWzorOplataTrwalaUtrata,
    rozProfesjonalnaRejestracja,
    rozProfesjonalnaRejestracjaDystrybucjaPtr,
    rozStawkaOplatZaSrodowisko,
    kpw,
    //Obwieszczenia
    obwProfesjonalnaRejestracja,
    obwOplatyTrwalaUtrata,
  } = useAppContext();

  if (!mainPage) {
    return (
      <div className={styles.pageMainContainer}>
        <h1>Nie znaleziono strony</h1>
        <p>Nie znaleziono strony dla podanej ścieżki: {pathname}</p>
        <p>
          <Link to={ROUTES.home}>Wróć na stronę główną</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <PageMetadata
        title={`${mainPage.fullLabel} | ${APPLICATION_NAME}`}
        description={mainPage.description}
        path={normalizedPath}
      />
      <section className={styles.pageMainContainer}>
        <h1>{mainPage.fullLabel}</h1>
        <p>
          {mainPage.description} Po rozwinięciu grupy zobaczysz dostępne
          dokumenty, w tym akty podstawowe, ich zmiany oraz teksty jednolite i
          ujednolicone. Przycisk "Rozwiń/Zwiń" pokazuje lub ukrywa listę
          dokumentów. Przycisk "Odśwież" ponownie pobiera dane wybranej grupy i
          rozwija jej zawartość. Data i godzina "Stan na" wskazują ostatnie
          udane pobranie danych. Linki pod dokumentami prowadzą do strony aktu w
          Dzienniku Ustaw ("Strona DzU"), dokumentu PDF, treści HTML lub strony
          ze szczegółowymi informacjami ("Szczegóły"). Dostępność linków zależy
          od dokumentu.
        </p>
        <FieldsetCustom legend={`Przepisy podstawowe:`}>
          <LawPolish legalActs={pord} />
          <LawPolish legalActs={rozRejestracjaPojazdow} />
          <LawPolish legalActs={rozSzczegoloweCzynnosci} />
          <LawPolish legalActs={rozOplatyZaDrPcTr} />
          <LawPolish legalActs={rozTrybLegalizacjiTrWzoryZl} />
          <LawPolish legalActs={rozProdukcjaDystrybucjaTr} />
          <LawPolish legalActs={rozCzasoweWycofanie} />
          <LawPolish legalActs={rozNadawanieCechIdentyfikacyjnych} />
        </FieldsetCustom>
        <FieldsetCustom legend={`Profesjonalna rejestracja pojazdów:`}>
          <LawPolish legalActs={rozProfesjonalnaRejestracja} />
          <LawPolish legalActs={rozProfesjonalnaRejestracjaDystrybucjaPtr} />
          <LawPolish legalActs={obwProfesjonalnaRejestracja} />
        </FieldsetCustom>
        <FieldsetCustom legend={`Wyrejestrowanie - trwała utrata:`}>
          <LawPolish legalActs={rozWzorOplataTrwalaUtrata} />
          <LawPolish legalActs={rozStawkaOplatZaSrodowisko} />
          <LawPolish
            legalActs={{
              ...obwOplatyTrwalaUtrata,
              data: obwOplatyTrwalaUtrata.data?.toReversed() ?? null,
            }}
          />
        </FieldsetCustom>
        <FieldsetCustom legend={`Kodeksy:`}>
          <LawPolish legalActs={kpw} />
        </FieldsetCustom>
      </section>
    </>
  );
}
