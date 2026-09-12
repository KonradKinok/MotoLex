import { ListChevronsUpDown, ListChevronsDownUp } from "lucide-react";
import styles from "./ButtonExpand.module.scss";

type ButtonExpandProps = {
  isExpanded: boolean;
  toggle: () => void;
  contentId: string;
};

export function ButtonExpand({
  isExpanded,
  contentId,
  toggle,
}: ButtonExpandProps) {
  return (
    <div
      className={styles.expandButtonContainer}
      data-tooltip-id="app-tooltip"
      data-tooltip-content={isExpanded ? "Rozwiń" : "Zwiń"}
      data-tooltip-variant="info"
    >
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        aria-label={isExpanded ? "Zwiń pełną treść" : "Rozwiń pełną treść"}
        onClick={toggle}
        className={styles.icon}
      >
        {isExpanded ? (
          <ListChevronsUpDown aria-hidden="true" />
        ) : (
          <ListChevronsDownUp aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
