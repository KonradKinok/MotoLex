import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";

function EmployeeZonePage() {
  return (
    <>
      <PageMetadata
        title={`Baza wiedzy dla pracowników | ${APPLICATION_NAME}`}
        description="Baza wiedzy dla pracowników wydziałów komunikacji. Miejsce na komunikaty instytucji, orzeczenia i specjalistyczne materiały wspierające codzienną pracę."
        path={ROUTES.employees}
      />
      <section>
        <h1>Baza wiedzy dla pracowników</h1>
        <p>
          W tym miejscu znajdą się komunikaty instytucji, orzeczenia oraz
          specjalistyczne materiały dla pracowników wydziałów komunikacji.
        </p>
      </section>
    </>
  );
}

export default EmployeeZonePage;
