import { NavLink } from "react-router";
import logoPojazdLex from "../../assets/images/logo/logoPojazdLex190.png";
import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <NavLink
      className={styles.siteLogo}
      to="/"
      end
      aria-label="PojazdLex — strona główna"
    >
      <div className={styles.logoImageContainer}>
        <img src={logoPojazdLex} width="190" height="104" alt="" />
        <span className={styles.logoText}>PojazdLex</span>
      </div>
    </NavLink>
  );
}
