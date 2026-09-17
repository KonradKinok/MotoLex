import { Link } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import VehicleOwnersImg from "../../assets/images/home/VehicleOwnersVertical.jpg";
import EmployeesImg from "../../assets/images/home/EmployeesVertical.jpg";
import CalculatorImg from "../../assets/images/home/CalculatorVertical.jpg";
import styles from "./HomePage.module.scss";

function HomePage() {
  const vehicleOwnersTooltip = "Dla właścicieli pojazdów";
  const employeesTooltip = "Dla pracowników Wydziałów Komunikacji";
  const calculatorTooltip = "Kalkulatory";

  return (
    <>
      <PageMetadata
        title={`Rejestracja pojazdów krok po kroku | ${APPLICATION_NAME}`}
        description="Sprawdź wymagane dokumenty, opłaty, terminy i zasady dotyczące rejestracji oraz innych spraw związanych z pojazdami."
        path={ROUTES.home}
      />
      <section className={styles.homePageMainContainer}>
        <h1 className={styles.headerH1}>Rejestracja pojazdów krok po kroku</h1>
        <div className={styles.homeLinksContainer}>
          <Link
            to="dla-wlascicieli"
            data-tooltip-id="app-tooltip"
            data-tooltip-content={vehicleOwnersTooltip}
            data-tooltip-variant="info"
            className={styles.homeLink}
          >
            <img
              src={VehicleOwnersImg}
              alt={vehicleOwnersTooltip}
              width={600}
              height={800}
              className={styles.img}
            />
          </Link>

          <Link
            to="dla-pracownikow"
            data-tooltip-id="app-tooltip"
            data-tooltip-content={employeesTooltip}
            data-tooltip-variant="info"
            className={styles.homeLink}
          >
            <img
              src={EmployeesImg}
              alt={employeesTooltip}
              width={600}
              height={800}
              className={styles.img}
            />
          </Link>

          <Link
            to="kalkulator"
            data-tooltip-id="app-tooltip"
            data-tooltip-content={calculatorTooltip}
            data-tooltip-variant="info"
            className={styles.homeLink}
          >
            <img
              src={CalculatorImg}
              alt={calculatorTooltip}
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

export default HomePage;
