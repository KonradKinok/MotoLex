import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";

function PenaltiesPage() {
  // const tablica = obiektDoKary["rejestracja"]["osobaPrawna"];

  return (
    <>
      <PageMetadata
        title={`Terminy i kary dotyczące pojazdów | ${APPLICATION_NAME}`}
        description="Sprawdź terminy ustawowe i kary administracyjne związane z rejestracją, nabyciem i zbyciem pojazdu."
        path={ROUTES.penalties}
      />
      <article>
        <h1>Terminy i kary</h1>
        <p>
          Treści dotyczące terminów ustawowych i kar administracyjnych zostaną
          dodane po ich weryfikacji merytorycznej.
        </p>
      </article>
    </>
  );
}

export default PenaltiesPage;
