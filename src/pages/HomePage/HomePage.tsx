import { NavLink } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES } from "../../config/routes";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <PageMetadata
        title="Rejestracja pojazdów krok po kroku | PojazdLex"
        description="Sprawdź wymagane dokumenty, opłaty, terminy i zasady dotyczące rejestracji oraz innych spraw związanych z pojazdami."
        path="/"
      />
      <div className={styles.contentPage}>
        <p className={styles.eyebrow}>Informacje dotyczące pojazdów</p>
        <h1>Rejestracja pojazdów krok po kroku</h1>
        <p>
          Sprawdź wymagane dokumenty, terminy, opłaty oraz zasady składania
          wniosków i zawiadomień.
        </p>

        <div className={styles.zoneLinks}>
          <NavLink className={styles.zoneLink} to={ROUTES.vehicleOwners}>
            <h2>Chcę załatwić sprawę</h2>
            <p>Dokumenty, formularze, terminy i informacje o karach.</p>
          </NavLink>

          <NavLink className={styles.zoneLink} to={ROUTES.employees}>
            <h2>Baza wiedzy dla pracowników</h2>
            <p>Materiały specjalistyczne dla wydziałów komunikacji.</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomePage;
