import { RefreshCw } from "lucide-react";
import styles from "./ButtonRefresh.module.scss";

type ButtonRefreshProps = {
  onClick: () => void;

  disabled?: boolean;
};

export function ButtonRefresh({ disabled, onClick }: ButtonRefreshProps) {
  return (
    <div
      className={styles.refreshButtonContainer}
      data-tooltip-id="app-tooltip"
      data-tooltip-content="Odśwież"
      data-tooltip-variant="info"
    >
      <button
        type="button"
        aria-label="Odśwież"
        onClick={onClick}
        disabled={disabled}
        className={styles.icon}
      >
        <RefreshCw aria-hidden="true" />
      </button>
    </div>
  );
}
