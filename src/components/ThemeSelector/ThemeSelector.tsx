import { useTheme } from "../../features/theme/ThemeContext";
import { themes, type Theme } from "../../features/theme/theme";
import styles from "./ThemeSelector.module.scss";

const themeLabels: Record<Theme, string> = {
  light: "Jasny",
  dark: "Ciemny",
  "high-contrast": "Wysoki kontrast",
};

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <label className={styles.selector}>
      <span className={styles.label}>Wygląd</span>
      <select
        className={styles.select}
        value={theme}
        onChange={(event) => setTheme(event.target.value as Theme)}
      >
        {themes.map((availableTheme) => (
          <option key={availableTheme} value={availableTheme}>
            {themeLabels[availableTheme]}
          </option>
        ))}
      </select>
    </label>
  );
}
