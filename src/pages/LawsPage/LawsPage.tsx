import { Link, useLocation } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import { useAppContext } from "../../hooks/useAppContext";
import styles from "../PageStyles.module.scss";
import { LawPolish } from "../../components/LawPolish/LawPolish";

export default function LawsPage() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  const { pord, rozRejestracjaPojazdow } = useAppContext();

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

        <LawPolish legalActs={pord} />
        <LawPolish legalActs={rozRejestracjaPojazdow} />
      </section>
    </>
  );
}
