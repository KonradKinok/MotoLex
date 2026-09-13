import { Link } from "react-router";
import KalkulatorVin1448x1086 from "../../assets/images/calculatorsPage/KalkulatorVinVertical1086x1448.jpg";
import KalkulatorKary1448x1086 from "../../assets/images/calculatorsPage/KalkulatorKaryVertical1086x1448.jpg";
import KalkulatorTrwalaUtrata1448x1086 from "../../assets/images/calculatorsPage/KalkulatorTrwalaUtrataVertical1086x1448.jpg";
import styles from "./CalculatorPage.module.scss";

function CalculatorPage() {
  return (
    <article className={styles.calculatorPageMainContainer}>
      <h1>Kalkulatory</h1>

      <div className={styles.calculatorLinks}>
        <Link to="kary" className={styles.calculatorLink}>
          <img
            src={KalkulatorKary1448x1086}
            alt="Kalkulator kar"
            width={600}
            height={800}
            className={styles.img}
          />
        </Link>

        <Link to="vin" className={styles.calculatorLink}>
          <img
            src={KalkulatorVin1448x1086}
            alt="Kalkulator VIN"
            width={600}
            height={800}
            className={styles.img}
          />
        </Link>

        <Link to="trwala-utrata" className={styles.calculatorLink}>
          <img
            src={KalkulatorTrwalaUtrata1448x1086}
            alt="Kalkulator trwałej utraty"
            width={600}
            height={800}
            className={styles.img}
          />
        </Link>
      </div>
    </article>
  );
}

export default CalculatorPage;
