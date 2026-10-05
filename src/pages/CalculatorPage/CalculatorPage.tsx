import { Link, useLocation } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import LinkImgPageCustom from "../../components/CustomControls/LinkImgPageCustom/LinkImgPageCustom";
import styles from "../PageStyles.module.scss";

export default function CalculatorPage() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  const columnsCount = 3; // Liczba kolumn obrazków
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
        {mainPage.children && mainPage.children.length > 0 && (
          <div data-columns={columnsCount} className={styles.linksImgContainer}>
            {mainPage.children.map((childPage, index) => (
              <LinkImgPageCustom
                key={childPage.to}
                childPage={childPage}
                loading={index < columnsCount ? "eager" : "lazy"}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
