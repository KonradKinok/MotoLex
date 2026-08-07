import { Contrast, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme } from "../../features/theme/ThemeContext";
import { themes, type Theme } from "../../features/theme/theme";
import styles from "./ThemeSelector.module.scss";

type ThemeOption = {
  label: string;
  icon: LucideIcon;
};

const themeOptions: Record<Theme, ThemeOption> = {
  light: {
    label: "Jasny",
    icon: Sun,
  },
  dark: {
    label: "Ciemny",
    icon: Moon,
  },
  contrast: {
    label: "Wysoki kontrast",
    icon: Contrast,
  },
};

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const currentThemeOption = themeOptions[theme];
  const ThemeIcon = currentThemeOption.icon;

  const handleThemeChange = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className={styles.themeButton}
      aria-label={`Zmień motyw. Aktualny motyw: ${currentThemeOption.label}`}
      title={`Aktualny motyw: ${currentThemeOption.label}`}
    >
      <ThemeIcon size={24} aria-hidden="true" />
    </button>
  );
}
