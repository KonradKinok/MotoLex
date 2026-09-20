import DocumentsMakeCheck from "../../components/DocumentsCheck/DocumentsMakeCheck";
import DocumentsSellerCheck from "../../components/DocumentsCheck/DocumentsSellerCheck";
import DocumentsVinCheck from "../../components/DocumentsCheck/DocumentsVinCheck";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import styles from "./DocumentsPage.module.scss";
function DocumentsPage() {
  return (
    <>
      <PageMetadata
        title={`Jak sprawdzić dokumenty pojazdu? | ${APPLICATION_NAME}`}
        description="Dowiedz się, jakie dokumenty pojazdu należy sprawdzić przed zakupem, sprzedażą samochodu i przed wizytą w Wydziale Komunikacji."
        path={ROUTES.documents}
      />
      <section className={styles.documentsPageMainContainer}>
        <h1 className={styles.headerH1}>Sprawdź dokumenty</h1>
        <p>
          Sprawdzanie dokumentów pojazdu jest istotnym krokiem w procesie zakupu
          lub sprzedaży samochodu. Poniżej znajdziesz informacje na temat
          najważniejszych dokumentów, które powinieneś sprawdzić przed
          dokonaniem transakcji i wizytą w Wydziale Komunikcji.
        </p>
        <div>
          <p>
            ‼️ DLACZEGO TO TAKIE WAŻNE? Różnica w danych = brak możliwości
            rejestracji.
          </p>
          <p>
            Urzędnik ma obowiązek zweryfikować każdy dokument. To nie
            złośliwość, tylko wymóg prawny. Jeśli dane się nie zgadzają, nie
            może zarejestrować pojazdu. Nie dlatego, że nie chce ale dlatego, że
            mu nie wolno.
          </p>
          <p>
            Efekt? 🏠 Wracasz do domu. 📝 Uzupełniasz dokumenty. 📆 Bierzesz
            kolejny bilet. ⏳ Czekasz od nowa.
          </p>
          <p>Jedna minuta sprawdzenia teraz = brak straty całego dnia. </p>
          <p>
            Twoje dokumenty są prawidłowe? Sprawdź i wyjdź z urzędu z załatwioną
            sprawą.
          </p>
        </div>
        <DocumentsVinCheck />
        <DocumentsMakeCheck />
        <DocumentsSellerCheck />
      </section>
    </>
  );
}

export default DocumentsPage;
