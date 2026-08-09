import { ChevronLeft } from "lucide-react";
import { navigationItems } from "../../config/navigationMain";
import { NavigationSideItem } from "./NavigationSideItem";
import styles from "./NavigationSide.module.scss";

type NavigationSideProps = {
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};
//1088px mobile menu breakpoint
export function NavigationSide({
  isSidebarCollapsed,
  toggleSidebarCollapsed,
  isMobileMenuOpen,
  closeMobileMenu,
}: NavigationSideProps) {
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
        <ChevronLeft
          className={styles.collapseButtonIcon}
          aria-hidden="true"
        />
        <span className={styles.collapseButtonText}>{toggleButtonText}</span>
      </button>

      <nav aria-label="Sprawy dotyczące pojazdów">
        <ul className={styles.sidebarNavigation}>
          {navigationItems.map((item) => (
            <NavigationSideItem
              key={item.to}
              item={item}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
