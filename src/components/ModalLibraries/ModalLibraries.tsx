import { useEffect, useRef, type MouseEvent } from "react";
import styles from "./ModalLibraries.module.scss";

interface ModalLibrariesProps {
  closeModal: () => void;
  isModalLibrariesOpen: boolean;
}

export function ModalLibraries({
  closeModal,
  isModalLibrariesOpen,
}: ModalLibrariesProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isModalLibrariesOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isModalLibrariesOpen && dialog.open) {
      dialog.close();
    }
  }, [isModalLibrariesOpen]);

  const handleClickOutside = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modalLibrariesOverlay}
      aria-labelledby="modal-libraries-title"
      id="modal-libraries"
      onClick={handleClickOutside}
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
    >
      <div className={styles.modal}>
        <h2 id="modal-libraries-title" className={styles.modalLibrariesTitle}>
          Biblioteki i narzędzia użyte w projekcie:
        </h2>
        <ul className={styles.containerUnnumberedList}>
          <li>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>

          <li>
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucide
            </a>
          </li>
          <li>
            <a
              href="https://mhnpd.github.io/react-loader-spinner/docs/intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Loader Spinner
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
