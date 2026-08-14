import { NavLink } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
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
          <NavLink className={styles.zoneLink} to="/zalatw-sprawe">
            <h2>Chcę załatwić sprawę</h2>
            <p>Dokumenty, formularze, terminy i informacje o karach.</p>
          </NavLink>

          <NavLink className={styles.zoneLink} to="/dla-pracownikow">
            <h2>Baza wiedzy dla pracowników</h2>
            <p>Materiały specjalistyczne dla wydziałów komunikacji.</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomePage;
