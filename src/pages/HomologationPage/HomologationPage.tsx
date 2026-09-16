import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";

function HomologationPage() {
  return (
    <>
      <PageMetadata
        title={`Homologacja pojazdów | ${APPLICATION_NAME}`}
        description="Dział poświęcony homologacji pojazdów. Materiały informacyjne zostaną udostępnione po weryfikacji merytorycznej."
        path={ROUTES.homologation}
      />
      <article>
        <h1>Homologacja</h1>
        <p>
          Treści dotyczące homologacji pojazdów zostaną dodane po ich weryfikacji
          merytorycznej.
        </p>
      </article>
    </>
  );
}

export default HomologationPage;
