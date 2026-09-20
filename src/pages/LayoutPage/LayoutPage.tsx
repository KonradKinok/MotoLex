import { Suspense } from "react";
import { Outlet } from "react-router";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useToggle } from "../../hooks/useToggle";
import { Loader } from "../../components/Loader/Loader";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ButtonUp } from "../../components/CustomControls/ButtonUp/ButtonUp";
import { Logo } from "../../components/Logo/Logo";
import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import { NavigationTop } from "../../components/NavigationTop/NavigationTop";
import { ButtonMobileMenu } from "../../components/ButtonMobileMenu/ButtonMobileMenu";
import { NavigationSide } from "../../components/NavigationSide/NavigationSide";
import { Advertisement } from "../../components/Advertisement/Advertisement";
import { Footer } from "../../components/Footer/Footer";
import styles from "./LayoutPage.module.scss";

export function LayoutPage() {
  //Mobile menu state
  const {
    value: isMobileMenuOpen,
    disable: closeMobileMenu,
    toggle: toggleMobileMenu,
  } = useToggle();

  //Sidebar collapse state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useLocalStorage(
    false,
    "pojazdlex-sidebar-collapsed",
  );

  const toggleSidebarCollapsed = () => {
    setIsSidebarCollapsed((previousValue) => !previousValue);
  };

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
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.navigationContainer}>
            <NavigationTop />
            <ButtonMobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
          <div className={styles.themeContainer}>
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

        <main id="main-content" tabIndex={-1} className={styles.mainContent}>
          <Breadcrumbs />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Advertisement />
      </div>
      <Footer />
      <ButtonUp />
      <Tooltip
        id="app-tooltip"
        className={styles.tooltip}
        border="1px solid var(--color-border)"
      />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: "var(--color-success)",
              secondary: "var(--color-surface)",
            },
          },
          error: {
            duration: 6000,
            iconTheme: {
              primary: "var(--color-error)",
              secondary: "var(--color-surface)",
            },
          },
          loading: {
            duration: Infinity,
            iconTheme: {
              primary: "var(--color-link)",
              secondary: "var(--color-border)",
            },
          },
        }}
      />
    </div>
  );
}
