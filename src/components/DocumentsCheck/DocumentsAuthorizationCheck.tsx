import checkAuthorizationImg from "../../assets/images/documentsCheck/checkAuthorization.webp";
import styles from "./DocumentsAuthorizationCheck.module.scss";

export default function DocumentsAuthorizationCheck() {
  return (
    <article className={styles.documentsAuthorizationCheckMainContainer}>
      <div>
        <h4>6️⃣ WSPÓŁWŁAŚCICIELE - RAZEM 🧍 🧍‍♂️ 🧍‍♀️ LUB Z PEŁNOMOCNICTWEM 📝 </h4>
        <p>Pojazd ma kilku właścicieli? Możecie przyjść do urzędu razem.</p>
        <p>
          Ktoś nie może przyjść? Zabierz jego pisemne pełnomocnictwo 📝, czyli
          zgodę na załatwienie rejestracji w jego imieniu.
        </p>
        <p> Potrzebujesz go od każdego nieobecnego współwłaściciela.</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={checkAuthorizationImg} alt="" className={styles.img} />
      </div>
    </article>
  );
}
