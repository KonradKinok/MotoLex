import checkElectronicInvoiceImg from "../../assets/images/documentsCheck/checkElectronicInvoice.jpg";
import styles from "./DocumentsElectronicInvoiceCheck.module.scss";

export default function DocumentsElectronicInvoiceCheck() {
  return (
    <article className={styles.documentsElectronicInvoiceCheckMainContainer}>
      <div>
        <h4>4️⃣ UMOWA ELEKTRONICZNA LUB FAKTURA?</h4>
        <p>
          💻 Masz umowę podpisaną elektronicznie? Zachowaj oryginalny plik z
          podpisami. Sam wydruk nie pozwoli urzędnikowi sprawdzić podpisów
          elektronicznych. Przed wizytą sprawdź, jak przekazać plik do Twojego
          wydziału komunikacji 📧.
        </p>
        <p>
          🖨️ Masz fakturę za pojazd? Zwykła faktura nie wymaga podpisów
          sprzedawcy i kupującego. Jeśli załatwiasz sprawę przy okienku,
          przygotuj jej papierową wersję zgodnie z wymaganiami urzędu.
        </p>
        <p>
          ⚠️ Uwaga: skan umowy z odręcznymi podpisami to nie to samo co umowa
          podpisana elektronicznie.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={checkElectronicInvoiceImg} alt="" className={styles.img} />
      </div>
    </article>
  );
}
