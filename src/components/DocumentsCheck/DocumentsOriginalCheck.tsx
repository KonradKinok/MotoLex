import checkOriginalImg from "../../assets/images/documentsCheck/checkOriginal.webp";
import styles from "./DocumentsOriginalCheck.module.scss";

export default function DocumentsOriginalCheck() {
  return (
    <article className={styles.documentsOriginalCheckMainContainer}>
      <div>
        <h4>5️⃣ ORYGINAŁY, NIE KOPIE! 📄</h4>
        <p>
          Wszystkie dokumenty wymagane do rejestracji pojazdu przedkładasz w
          oryginale (dokument własności może być również w kopii potwierdzonej
          za zgodność z oryginałem przez notariusza).
        </p>
        <p>
          ⛔ Zdjęcie w telefonie NIE wystarczy. Potrzebujesz fizycznego
          dokumentu.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={checkOriginalImg} alt="" className={styles.img} />
      </div>
    </article>
  );
}
