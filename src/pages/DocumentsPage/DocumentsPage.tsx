import { PageMetadata } from "../../components/PageMetaData/PageMetaData";

function DocumentsPage() {
  return (
    <>
      <PageMetadata
        title="Jak sprawdzić dokumenty pojazdu? | PojazdLex"
        description="Dowiedz się, jakie dokumenty pojazdu należy sprawdzić przed zakupem lub sprzedażą samochodu."
        path="/dla-wlascicieli/dokumenty"
      />
      <article>
        <h1>Sprawdź dokumenty</h1>
        <p>
          Sprawdzanie dokumentów pojazdu jest istotnym krokiem w procesie zakupu
          lub sprzedaży samochodu. Poniżej znajdziesz informacje na temat
          najważniejszych dokumentów, które powinieneś sprawdzić przed
          dokonaniem transakcji.
        </p>
      </article>
    </>
  );
}

export default DocumentsPage;
