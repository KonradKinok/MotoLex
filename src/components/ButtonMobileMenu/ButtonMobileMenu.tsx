import { Menu, TableOfContents } from "lucide-react";
import styles from "./ButtonMobileMenu.module.scss";

type ButtonMobileMenuProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export function ButtonMobileMenu({
  isMobileMenuOpen,
  toggleMobileMenu,
}: ButtonMobileMenuProps) {
  return (
    <button
      className={styles.mobileMenuButton}
      type="button"
      aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
      aria-controls="sidebar"
      aria-expanded={isMobileMenuOpen}
      onClick={toggleMobileMenu}
    >
      {isMobileMenuOpen ? (
        <TableOfContents size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  );
}
