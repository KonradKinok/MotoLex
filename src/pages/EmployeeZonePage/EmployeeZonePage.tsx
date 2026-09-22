import { Link } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import HomologacjaVertical from "../../assets/images/employeeZonePage/HomologacjaVertical.webp";
import styles from "./EmployeeZonePage.module.scss";

function EmployeeZonePage() {
  return (
    <>
      <PageMetadata
        title={`Baza wiedzy dla pracowników | ${APPLICATION_NAME}`}
        description="Baza wiedzy dla pracowników wydziałów komunikacji. Miejsce na komunikaty instytucji, orzeczenia i specjalistyczne materiały wspierające codzienną pracę."
        path={ROUTES.employees}
      />
      <section className={styles.employeeZonePageMainContainer}>
        <div>
          <h1 className={styles.headerH1}>Baza wiedzy dla pracowników</h1>
          <p>
            W tym miejscu znajdują się komunikaty instytucji, orzeczenia oraz
            specjalistyczne materiały dla pracowników wydziałów komunikacji.
          </p>
        </div>
        <div className={styles.employeeZoneLinksContainer}>
          <Link to="homologacja" className={styles.employeeZoneLink}>
            <img
              src={HomologacjaVertical}
              alt="Homologacja"
              width={600}
              height={800}
              className={styles.img}
            />
          </Link>
        </div>
      </section>
    </>
  );
}

export default EmployeeZonePage;
