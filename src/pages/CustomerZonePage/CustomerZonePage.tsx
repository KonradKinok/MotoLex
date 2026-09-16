import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";

function CustomerZonePage() {
  return (
    <>
      <PageMetadata
        title={`Sprawy właścicieli pojazdów | ${APPLICATION_NAME}`}
        description="Informacje dla właścicieli pojazdów dotyczące dokumentów, rejestracji, opłat, terminów, wniosków i umów."
        path={ROUTES.vehicleOwners}
      />
      <article>
        <h1>Załatw sprawę</h1>
        <p>
          W tym miejscu znajdą się informacje o dokumentach, terminach,
          opłatach, wnioskach i umowach dotyczących pojazdów.
        </p>
      </article>
    </>
  );
}

export default CustomerZonePage;
