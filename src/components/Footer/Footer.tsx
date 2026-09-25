import { BookOpenText } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { ROUTES } from "../../config/routes";
import { useToggle } from "../../hooks/useToggle";
import { ModalLibraries } from "../ModalLibraries/ModalLibraries";
import footerLogoImage from "../../assets/images/footer/konikMaly24x24Squoosh.png";
import footerLogoText from "../../assets/images/footer/3KLogo.png";
import styles from "./Footer.module.scss";

declare global {
  interface Window {
    googlefc?: {
      callbackQueue?: {
        push: (callback: () => void) => unknown;
      };
      showRevocationMessage?: () => void;
    };
  }
}

export function Footer() {
  // Libraries modal state
  const {
    value: isModalLibrariesOpen,
    disable: closeModalLibraries,
    toggle: toggleModalLibraries,
  } = useToggle();

  function openPrivacySettings() {
    const googlefc = window.googlefc;

    if (!googlefc?.callbackQueue || !googlefc.showRevocationMessage) {
      toast.error(
        "Ustawienia prywatności są teraz niedostępne. " +
          "Spróbuj ponownie po załadowaniu strony. " +
          "Jeśli używasz blokera reklam, może on blokować komunikat Google.",
        { id: "privacy-settings-unavailable", duration: 8000 },
      );
      return;
    }

    googlefc.callbackQueue.push(googlefc.showRevocationMessage);
  }

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
      <div className={styles.footerLegal}>
        <p className={styles.footerCopyrightText}>
          © {new Date().getFullYear()} PojazdLex
        </p>
        <Link className={styles.footerAddress} to={ROUTES.privacyPolicy}>
          Polityka prywatności
        </Link>
        <button
          type="button"
          className={styles.footerPrivacyButton}
          onClick={openPrivacySettings}
        >
          Ustawienia prywatności
        </button>
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
