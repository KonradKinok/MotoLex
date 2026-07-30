import { NavLink } from "react-router";

function HomePage() {
  return (
    <div className="content-page">
      <p className="eyebrow">Informacje dotyczące pojazdów</p>
      <h1>Rejestracja pojazdów krok po kroku</h1>
      <p>
        Sprawdź wymagane dokumenty, terminy, opłaty oraz zasady składania
        wniosków i zawiadomień.
      </p>

      <div className="zone-links">
        <NavLink className="zone-link" to="/zalatw-sprawe">
          <h2>Chcę załatwić sprawę</h2>
          <p>Dokumenty, formularze, terminy i informacje o karach.</p>
        </NavLink>

        <NavLink className="zone-link" to="/dla-pracownikow">
          <h2>Baza wiedzy dla pracowników</h2>
          <p>Materiały specjalistyczne dla wydziałów komunikacji.</p>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
