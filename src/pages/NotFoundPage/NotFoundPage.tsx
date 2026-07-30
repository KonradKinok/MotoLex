import { NavLink } from "react-router";

function NotFoundPage() {
  return (
    <article className="content-page">
      <h1>Nie znaleziono strony</h1>
      <p>Podany adres jest nieprawidłowy lub strona została przeniesiona.</p>
      <p>
        <NavLink to="/">Wróć na stronę główną</NavLink>
      </p>
    </article>
  );
}

export default NotFoundPage;
