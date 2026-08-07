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
      aria-controls="sidebar"
      aria-expanded={isMobileMenuOpen}
      onClick={toggleMobileMenu}
    >
      {isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
    </button>
  );
}
