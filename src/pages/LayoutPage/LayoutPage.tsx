import { Suspense } from "react";
import { Outlet } from "react-router";
import { Logo } from "../../components/Logo/Logo";
import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import { NavigationTop } from "../../components/NavigationTop/NavigationTop";
import { useToggle } from "../../hooks/useToggle";
import { ButtonMobileMenu } from "../../components/ButtonMobileMenu/ButtonMobileMenu";
import styles from "./LayoutPage.module.scss";
import { NavigationSide } from "../../components/NavigationSide/NavigationSide";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Advertisement } from "../../components/Advertisement/Advertisement";

export function LayoutPage() {
  //Mobile menu state
  const {
    value: isMobileMenuOpen,
    disable: closeMobileMenu,
    toggle: toggleMobileMenu,
  } = useToggle();

  //Sidebar collapse state
  const { value: isSidebarCollapsed, toggle: toggleSidebarCollapsed } =
    useToggle();

  const layoutClassName = [
    styles.contentLayout,
    isSidebarCollapsed ? styles.sidebarCollapsedLayout : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main-content">
        Przejdź do głównej treści
      </a>

      <header className={styles.siteHeader}>
        <div className={`${styles.pageContainer} ${styles.headerContent}`}>
          <div className={`${styles.logoContainer}`}>
            <Logo />
          </div>
          <div>
            <NavigationTop />
            <ButtonMobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
          <div>
            <ThemeSelector />
          </div>
        </div>
      </header>

      <div className={`${styles.pageContainer} ${layoutClassName}`}>
        <NavigationSide
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebarCollapsed={toggleSidebarCollapsed}
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />

        <main id="main-content" className={styles.mainContent}>
          <Breadcrumbs />
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
        <Advertisement />
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
