import { Link, useLocation } from "react-router";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import DocumentsAuthorizationCheck from "../../components/DocumentsCheck/DocumentsAuthorizationCheck";
import DocumentsElectronicInvoiceCheck from "../../components/DocumentsCheck/DocumentsElectronicInvoiceCheck";
import DocumentsMakeCheck from "../../components/DocumentsCheck/DocumentsMakeCheck";
import DocumentsOriginalCheck from "../../components/DocumentsCheck/DocumentsOriginalCheck";
import DocumentsSellerCheck from "../../components/DocumentsCheck/DocumentsSellerCheck";
import DocumentsVinCheck from "../../components/DocumentsCheck/DocumentsVinCheck";
import styles from "./DocumentsPage.module.scss";

export default function DocumentsPage() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  if (!mainPage) {
    return (
      <div className={styles.documentsPageMainContainer}>
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
      <section className={styles.documentsPageMainContainer}>
        <h1>{mainPage.fullLabel}</h1>
        <p>{mainPage.description}</p>
        <div>
          <p>
            ‼️ DLACZEGO SPRAWDZENIE DOKUMENTÓW JEST WAŻNE? Różnica w danych =
            brak możliwości rejestracji.
          </p>
          <p>
            Urzędnik ma obowiązek zweryfikować każdy dokument. To nie
            złośliwość, tylko wymóg prawny. Jeśli dane się nie zgadzają, nie
            może zarejestrować pojazdu. Nie dlatego, że nie chce ale dlatego, że
            mu nie wolno.
          </p>
          <p>
            Efekt? 🏠 Wracasz do domu. 📝 Uzupełniasz dokumenty. 📆 Bierzesz
            kolejny bilet. ⏳ Czekasz od nowa.
          </p>
          <p>Jedna minuta sprawdzenia teraz = brak straty całego dnia. </p>
          <p>
            Twoje dokumenty są prawidłowe? Sprawdź i wyjdź z urzędu z załatwioną
            sprawą.
          </p>
        </div>
        <DocumentsVinCheck />
        <DocumentsMakeCheck />
        <DocumentsSellerCheck />
        <DocumentsElectronicInvoiceCheck />
        <DocumentsOriginalCheck />
        <DocumentsAuthorizationCheck />
      </section>
    </>
  );
}
