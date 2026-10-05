import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import LinkImgPageCustom from "../../components/CustomControls/LinkImgPageCustom/LinkImgPageCustom";
import styles from "../PageStyles.module.scss";

export default function HomePage() {
  const columnsCount = 3; // Liczba kolumn obrazków

  return (
    <>
      <PageMetadata
        title={`Rejestracja pojazdów krok po kroku | ${APPLICATION_NAME}`}
        description="Sprawdź wymagane dokumenty, opłaty, terminy i zasady dotyczące rejestracji oraz innych spraw związanych z pojazdami."
        path={ROUTES.home}
      />
      <section className={styles.pageMainContainer}>
        <h1>Rejestracja pojazdów krok po kroku</h1>
        <p>
          Sprawdź wymagane dokumenty, opłaty, terminy i zasady dotyczące
          rejestracji oraz innych spraw związanych z pojazdami.
        </p>

        <div data-columns={columnsCount} className={styles.linksImgContainer}>
          {navigationItems.map((childPage, index) => (
            <LinkImgPageCustom
              key={childPage.to}
              childPage={childPage}
              loading={index < columnsCount ? "eager" : "lazy"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
