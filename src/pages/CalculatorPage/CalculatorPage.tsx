import { Link } from "react-router";
import styles from "./CalculatorPage.module.scss";

function CalculatorPage() {
  return (
    <article className={styles.calculatorPageMainContainer}>
      <h1>Kalkulatory</h1>

      <div className={styles.calculatorLinks}>
        <Link to="kary" className={styles.calculatorLink}>
          <img src="" alt="" width={800} height={600} />
          <span>Kary</span>
        </Link>

        <Link to="vin" className={styles.calculatorLink}>
          <img src="" alt="" width={800} height={600} />
          <span>VIN</span>
        </Link>

        <Link to="trwala-utrata" className={styles.calculatorLink}>
          <img src="" alt="" width={800} height={600} />
          <span>Trwała utrata</span>
        </Link>
      </div>
    </article>
  );
}

export default CalculatorPage;
