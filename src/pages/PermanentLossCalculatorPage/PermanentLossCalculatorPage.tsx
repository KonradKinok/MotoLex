import { Link, useLocation } from "react-router";
import { useAppContext } from "../../hooks/useAppContext";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import FormPermanentLossCalculator from "../../components/ComponentPermanentLoss/FormPermanentLossCalculator/FormPermanentLossCalculator";
import PermanentLossTheoryForCalculator from "../../components/ComponentPermanentLoss/PermanentLossTheoryForCalculator/PermanentLossTheoryForCalculator";
import styles from "../PageStyles.module.scss";
import { LawPolish } from "../../components/LawPolish/LawPolish";
import { FieldsetCustom } from "../../components/CustomControls/FieldsetCustom/FieldsetCustom";

export default function PermanentLossCalculatorPage() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  const {
    rozWzorOplataTrwalaUtrata,
    rozOplatyZaDrPcTr,
    obwOplatyTrwalaUtrata,
    rozStawkaOplatZaSrodowisko,
    kpw,
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
        <FormPermanentLossCalculator />
        <PermanentLossTheoryForCalculator />
        <FieldsetCustom legend={`Przepisy:`}>
          <LawPolish legalActs={rozWzorOplataTrwalaUtrata} />
          <LawPolish legalActs={rozOplatyZaDrPcTr} />
          <LawPolish legalActs={rozStawkaOplatZaSrodowisko} />
          <LawPolish
            legalActs={{
              ...obwOplatyTrwalaUtrata,
              data: obwOplatyTrwalaUtrata.data?.toReversed() ?? null,
            }}
          />
          <LawPolish legalActs={kpw} />
        </FieldsetCustom>
      </section>
    </>
  );
}
