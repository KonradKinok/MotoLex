import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import styles from "./LayoutPage.module.scss";

export function LayoutPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const layoutClassName = [
    styles.contentLayout,
    isSidebarCollapsed ? styles.sidebarCollapsedLayout : "",
  ]
    .filter(Boolean)
    .join(" ");

  const sidebarClassName = [
    styles.sidebar,
    isSidebarCollapsed ? styles.sidebarCollapsed : "",
    isMobileMenuOpen ? styles.sidebarMobileOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main-content">
        Przejdź do głównej treści
      </a>

      <header className={styles.siteHeader}>
        <div className={`${styles.pageContainer} ${styles.headerContent}`}>
          <NavLink
            className={styles.siteLogo}
            to="/"
            end
            aria-label="MotoLex — strona główna"
          >
            MotoLex
          </NavLink>

          <nav className={styles.mainNavigation} aria-label="Menu główne">
            <NavLink
              to="/zalatw-sprawe"
              className={({ isActive }) =>
                `${styles.navigationLink} ${
                  isActive ? styles.navigationLinkActive : ""
                }`
              }
            >
              Załatw sprawę
            </NavLink>
            <NavLink
              to="/dla-pracownikow"
              className={({ isActive }) =>
                `${styles.navigationLink} ${
                  isActive ? styles.navigationLinkActive : ""
                }`
              }
            >
              Baza wiedzy dla pracowników
            </NavLink>
          </nav>

          <ThemeSelector />

          <button
            className={styles.mobileMenuButton}
            type="button"
            aria-controls="sidebar"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          </button>
        </div>
      </header>

      <div className={`${styles.pageContainer} ${layoutClassName}`}>
        <aside
          id="sidebar"
          className={sidebarClassName}
          aria-label="Menu tematyczne"
        >
          <button
            className={styles.sidebarCollapseButton}
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
            <span className={styles.sidebarText}>
              {isSidebarCollapsed ? "Rozwiń" : "Zwiń"}
            </span>
          </button>

          <nav aria-label="Sprawy dotyczące pojazdów">
            <ul className={styles.sidebarNavigation}>
              <li>
                <NavLink
                  to="/zalatw-sprawe"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${styles.sidebarLink} ${
                      isActive ? styles.sidebarLinkActive : ""
                    }`
                  }
                >
                  <span aria-hidden="true">●</span>
                  <span className={styles.sidebarText}>Załatw sprawę</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kary"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${styles.sidebarLink} ${
                      isActive ? styles.sidebarLinkActive : ""
                    }`
                  }
                >
                  <span aria-hidden="true">●</span>
                  <span className={styles.sidebarText}>Terminy i kary</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/przepisy-prawne"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${styles.sidebarLink} ${
                      isActive ? styles.sidebarLinkActive : ""
                    }`
                  }
                >
                  <span aria-hidden="true">●</span>
                  <span className={styles.sidebarText}>Przepisy prawne</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dla-pracownikow"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${styles.sidebarLink} ${
                      isActive ? styles.sidebarLinkActive : ""
                    }`
                  }
                >
                  <span aria-hidden="true">●</span>
                  <span className={styles.sidebarText}>Dla pracowników</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <main id="main-content" className={styles.mainContent}>
          <Suspense
            fallback={
              <p className={styles.pageLoading} role="status">
                Ładowanie strony…
              </p>
            }
          >
            <Outlet />
          </Suspense>
        </main>

        <aside className={styles.advertisingColumn} aria-label="Reklamy">
          <section className={styles.advertisement}>
            <p className={styles.advertisementLabel}>Reklama</p>
            <div className={styles.advertisementPlaceholder}>300 × 250</div>
          </section>

          <section className={styles.advertisement}>
            <p className={styles.advertisementLabel}>Reklama</p>
            <div className={styles.advertisementPlaceholder}>
              Reklama responsywna
            </div>
          </section>
        </aside>
      </div>

      <footer className={styles.siteFooter}>
        <div className={`${styles.pageContainer} ${styles.footerContent}`}>
          <p>© {new Date().getFullYear()} MotoLex</p>
          <p>Informacje dotyczące rejestracji i spraw pojazdów</p>
        </div>
      </footer>
    </div>
  );
}
