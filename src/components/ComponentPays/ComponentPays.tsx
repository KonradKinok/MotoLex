import { Pays } from "../../classes/Pays";
import { useAppContext } from "../../hooks/useAppContext";
import { FieldsetCustom } from "../CustomControls/FieldsetCustom/FieldsetCustom";
import { currencyFormater } from "../globalFunctions/globalFunctions";
import { LawPolish } from "../LawPolish/LawPolish";
import styles from "./ComponentPays.module.scss";

const pays = new Pays();
export function ComponentPays() {
  // Opłaty - klasa
  const registrationDocumentsNewest = pays.getDocumentsByTypeNewest(
    "rejestracjaPojazdow",
  );
  const profesionalRegistrationDocumentsNewest = pays.getDocumentsByTypeNewest(
    "profesjonalnaRejestracjaPojazdow",
  );

  //Przepisy
  const {
    rozOplatyZaDrPcTr,
    rozProfesjonalnaRejestracja,
    obwProfesjonalnaRejestracja,
  } = useAppContext();

  return (
    <div className={styles.componentPaysContainer}>
      <FieldsetCustom legend={`Dokumenty komunikacyjne:`}>
        <FieldsetCustom legend={`Rejestracja pojazdów:`}>
          <ul className={styles.list}>
            {registrationDocumentsNewest.map((item) => (
              <li
                key={item.id}
                className={`${styles.listItem} ${styles.textHover}`}
              >
                <span>{item.displayName}:</span>
                <span>{currencyFormater(item.value.amount)}</span>
              </li>
            ))}
          </ul>
        </FieldsetCustom>
        <FieldsetCustom legend={`Profesjonalna rejestracja pojazdów:`}>
          <ul className={styles.list}>
            {profesionalRegistrationDocumentsNewest.map((item) => (
              <li
                key={item.id}
                className={`${styles.listItem} ${styles.textHover}`}
              >
                <span>{item.displayName}:</span>
                <span>{currencyFormater(item.value.amount)}</span>
              </li>
            ))}
          </ul>
        </FieldsetCustom>
      </FieldsetCustom>
      <FieldsetCustom legend={`Przepisy:`}>
        <LawPolish legalActs={rozOplatyZaDrPcTr} />
        <LawPolish legalActs={rozProfesjonalnaRejestracja} />
        <LawPolish legalActs={obwProfesjonalnaRejestracja} />
      </FieldsetCustom>
      {/* <pre>Wynik: {JSON.stringify(table, null, 2)} </pre>
      <pre>Wynik1: {JSON.stringify(registrationDocumentsNewest, null, 2)} </pre> */}
    </div>
  );
}
