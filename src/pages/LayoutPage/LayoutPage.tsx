import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router";
import "./LayoutPage.css";

export function LayoutPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const layoutClassName = isSidebarCollapsed
    ? "content-layout content-layout--sidebar-collapsed"
    : "content-layout";

  const sidebarClassName = [
    "sidebar",
    isSidebarCollapsed ? "sidebar--collapsed" : "",
    isMobileMenuOpen ? "sidebar--mobile-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Przejdź do głównej treści
      </a>

      <header className="site-header">
        <div className="page-container header-content">
          <NavLink
            className="site-logo"
            to="/"
            end
            aria-label="MotoLex — strona główna"
          >
            MotoLex
          </NavLink>

          <nav className="main-navigation" aria-label="Menu główne">
            <NavLink to="/zalatw-sprawe">Załatw sprawę</NavLink>
            <NavLink to="/dla-pracownikow">
              Baza wiedzy dla pracowników
            </NavLink>
          </nav>

          <button
            className="mobile-menu-button"
            type="button"
            aria-controls="sidebar"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          </button>
        </div>
      </header>

      <div className={`page-container ${layoutClassName}`}>
        <aside
          id="sidebar"
          className={sidebarClassName}
          aria-label="Menu tematyczne"
        >
          <button
            className="sidebar-collapse-button"
            type="button"
            aria-label={
              isSidebarCollapsed ? "Rozwiń menu boczne" : "Zwiń menu boczne"
            }
            aria-expanded={!isSidebarCollapsed}
            onClick={() => setIsSidebarCollapsed((current) => !current)}
          >
            <span aria-hidden="true">
              {isSidebarCollapsed ? "›" : "‹"}
            </span>
            <span className="sidebar__text">
              {isSidebarCollapsed ? "Rozwiń" : "Zwiń"}
            </span>
          </button>

          <nav aria-label="Sprawy dotyczące pojazdów">
            <ul className="sidebar-navigation">
              <li>
                <NavLink to="/zalatw-sprawe" onClick={closeMobileMenu}>
                  <span aria-hidden="true">●</span>
                  <span className="sidebar__text">Załatw sprawę</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/kary" onClick={closeMobileMenu}>
                  <span aria-hidden="true">●</span>
                  <span className="sidebar__text">Terminy i kary</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/przepisy-prawne" onClick={closeMobileMenu}>
                  <span aria-hidden="true">●</span>
                  <span className="sidebar__text">Przepisy prawne</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dla-pracownikow" onClick={closeMobileMenu}>
                  <span aria-hidden="true">●</span>
                  <span className="sidebar__text">Dla pracowników</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <main id="main-content" className="main-content">
          <Suspense
            fallback={
              <p className="page-loading" role="status">
                Ładowanie strony…
              </p>
            }
          >
            <Outlet />
          </Suspense>
        </main>

        <aside className="advertising-column" aria-label="Reklamy">
          <section className="advertisement">
            <p className="advertisement-label">Reklama</p>
            <div className="advertisement-placeholder">300 × 250</div>
          </section>

          <section className="advertisement">
            <p className="advertisement-label">Reklama</p>
            <div className="advertisement-placeholder">
              Reklama responsywna
            </div>
          </section>
        </aside>
      </div>

      <footer className="site-footer">
        <div className="page-container footer-content">
          <p>© {new Date().getFullYear()} MotoLex</p>
          <p>Informacje dotyczące rejestracji i spraw pojazdów</p>
        </div>
      </footer>
    </div>
  );
}
