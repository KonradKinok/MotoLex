import { NavLink } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";

function NotFoundPage() {
  return (
    <>
      <PageMetadata
        title="Nie znaleziono strony | PojazdLex"
        description="Podany adres nie prowadzi do istniejącej strony."
        path="/404"
        noIndex
      />
      <article>
        <h1>Nie znaleziono strony</h1>
        <p>Podany adres jest nieprawidłowy lub strona została przeniesiona.</p>
        <p>
          <NavLink to="/">Wróć na stronę główną</NavLink>
        </p>
      </article>
    </>
  );
}

export default NotFoundPage;
