import { useState, type Dispatch, type SetStateAction } from "react";
import { ChevronLeft } from "lucide-react";
import { useLocation } from "react-router";
import { navigationItems } from "../../config/navigationMain";
import { NavigationSideItem } from "./NavigationSideItem";
import styles from "./NavigationSide.module.scss";

type NavigationSideProps = {
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};

function getOpenItemPath(pathname: string): string | null {
  const belongsToNavigation = navigationItems.some(
    (item) =>
      pathname === item.to || pathname.startsWith(`${item.to}/`),
  );

  return belongsToNavigation ? pathname : null;
}

//1088px mobile menu breakpoint
export function NavigationSide({
  isSidebarCollapsed,
  toggleSidebarCollapsed,
  isMobileMenuOpen,
  closeMobileMenu,
}: NavigationSideProps) {
  const { pathname } = useLocation();
  const routeOpenItemPath = getOpenItemPath(pathname);
  const [openItemOverride, setOpenItemOverride] = useState<{
    pathname: string;
    openItemPath: string | null;
  } | null>(null);

  const openItemPath =
    openItemOverride?.pathname === pathname
      ? openItemOverride.openItemPath
      : routeOpenItemPath;

  const setOpenItemPath: Dispatch<SetStateAction<string | null>> = (value) =>
    setOpenItemOverride((currentOverride) => {
      const currentOpenItemPath =
        currentOverride?.pathname === pathname
          ? currentOverride.openItemPath
          : routeOpenItemPath;

      const nextOpenItemPath =
        typeof value === "function" ? value(currentOpenItemPath) : value;

      return {
        pathname,
        openItemPath: nextOpenItemPath,
      };
    });

  const toggleButtonText = isSidebarCollapsed ? "Rozwiń" : "Zwiń";
  const ariaLabelText = `${toggleButtonText} menu boczne`;

  const sidebarClassName = [
    styles.sidebar,
    isMobileMenuOpen ? styles.sidebarMobileOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      id="sidebar"
      className={sidebarClassName}
      data-sidebar-collapsed={isSidebarCollapsed}
      aria-label="Menu tematyczne"
    >
      <button
        className={styles.sidebarCollapseButton}
        type="button"
        title={ariaLabelText}
        aria-label={ariaLabelText}
        aria-expanded={!isSidebarCollapsed}
        onClick={toggleSidebarCollapsed}
      >
        <ChevronLeft className={styles.collapseButtonIcon} aria-hidden="true" />
        <span className={styles.collapseButtonText}>{toggleButtonText}</span>
      </button>

      <nav aria-label="Sprawy dotyczące pojazdów">
        <ul className={styles.sidebarNavigation}>
          {navigationItems.map((item) => (
            <NavigationSideItem
              key={item.to}
              item={item}
              openItemPath={openItemPath}
              setOpenItemPath={setOpenItemPath}
              closeMobileMenu={closeMobileMenu}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
