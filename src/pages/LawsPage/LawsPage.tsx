import { Link, useLocation } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import { useAppContext } from "../../hooks/useAppContext";
import styles from "../PageStyles.module.scss";
import { LawPolish } from "../../components/LawPolish/LawPolish";
import { FieldsetCustom } from "../../components/CustomControls/FieldsetCustom/FieldsetCustom";

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
        <p>{mainPage.description}</p>
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
          <LawPolish
            legalActs={{
              ...obwOplatyTrwalaUtrata,
              data: obwOplatyTrwalaUtrata.data?.slice(0, 1) ?? null,
            }}
          />
        </FieldsetCustom>
      </section>
    </>
  );
}
