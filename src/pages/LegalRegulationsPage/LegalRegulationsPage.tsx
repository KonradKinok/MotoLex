import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";

function LegalRegulationsPage() {
  return (
    <>
      <PageMetadata
        title={`Przepisy prawne | ${APPLICATION_NAME}`}
        description="Dział poświęcony przepisom dotyczącym rejestracji pojazdów. W tym miejscu zostanie udostępniona lista przepisów prawnych."
        path={ROUTES.legalRegulations}
      />
      <section>
        <h1>Przepisy prawne</h1>
        <p>
          W tym miejscu znajdzie się lista przepisów dotyczących rejestracji
          pojazdów.
        </p>
      </section>
    </>
  );
}

export default LegalRegulationsPage;
