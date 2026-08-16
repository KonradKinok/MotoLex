import { BookOpenText } from "lucide-react";
import { useToggle } from "../../hooks/useToggle";
import { ModalLibraries } from "../ModalLibraries/ModalLibraries";
import footerLogoImage from "../../assets/images/footer/konikMaly24x24Squoosh.png";
import footerLogoText from "../../assets/images/footer/3KLogo.png";
import styles from "./Footer.module.scss";

export function Footer() {
  // Libraries modal state
  const {
    value: isModalLibrariesOpen,
    disable: closeModalLibraries,
    toggle: toggleModalLibraries,
  } = useToggle();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={footerLogoImage} alt="" width="24" />
          <img src={footerLogoText} alt="3K NexGen" />
        </div>
        <address>
          <a className={styles.footerAddress} href="mailto:3k.nexgen@gmail.com">
            3K.nexgen@gmail.com
          </a>
        </address>
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.footerCopyrightText}>
          © {new Date().getFullYear()} PojazdLex
        </p>
      </div>

      <button
        type="button"
        className={styles.footerLibraries}
        onClick={toggleModalLibraries}
        aria-haspopup="dialog"
        aria-controls="modal-libraries"
        aria-expanded={isModalLibrariesOpen}
      >
        <BookOpenText size={32} aria-hidden="true" />
        <small>Biblioteki</small>
      </button>

      <ModalLibraries
        closeModal={closeModalLibraries}
        isModalLibrariesOpen={isModalLibrariesOpen}
      />
    </footer>
  );
}
