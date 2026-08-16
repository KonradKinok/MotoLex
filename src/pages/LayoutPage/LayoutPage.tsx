import { Suspense } from "react";
import { Outlet } from "react-router";
import { useToggle } from "../../hooks/useToggle";
import { Logo } from "../../components/Logo/Logo";
import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import { NavigationTop } from "../../components/NavigationTop/NavigationTop";
import { ButtonMobileMenu } from "../../components/ButtonMobileMenu/ButtonMobileMenu";
import { NavigationSide } from "../../components/NavigationSide/NavigationSide";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Advertisement } from "../../components/Advertisement/Advertisement";
import { Footer } from "../../components/Footer/Footer";
import { Loader } from "../../components/Loader/Loader";
import styles from "./LayoutPage.module.scss";

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Advertisement />
      </div>
      <Footer />
    </div>
  );
}
