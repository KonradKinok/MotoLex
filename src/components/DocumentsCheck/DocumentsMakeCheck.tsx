import checkMakeImg from "../../assets/images/documentsCheck/checkMake.jpg";
import styles from "./DocumentsMakeCheck.module.scss";

export default function DocumentsMakeCheck() {
  return (
    <article className={styles.documentsMakeCheckMainContainer}>
      <div>
        <p>
          2️⃣ <b>MARKA, MODEL, NUMER REJESTRACYJNY</b>
        </p>
        <p>
          Sprawdź, czy marka i model pojazdu wpisane w dowodzie rejestracyjnym
          zgadzają się z tym, co widzisz na umowie i co stoi 🚙 na parkingu.
          Brzmi banalnie? Błędy zdarzają się częściej, niż myślisz!
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={checkMakeImg} alt="" className={styles.img} />
      </div>
    </article>
  );
}
