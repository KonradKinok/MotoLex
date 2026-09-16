import { NavLink } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";

function NotFoundPage() {
  return (
    <>
      <PageMetadata
        title={`Nie znaleziono strony | ${APPLICATION_NAME}`}
        description="Podany adres nie prowadzi do istniejącej strony."
        path="/404"
        noIndex
      />
      <article>
        <h1>Nie znaleziono strony</h1>
        <p>Podany adres jest nieprawidłowy lub strona została przeniesiona.</p>
        <p>
          <NavLink to={ROUTES.home}>Wróć na stronę główną</NavLink>
        </p>
      </article>
    </>
  );
}

export default NotFoundPage;
