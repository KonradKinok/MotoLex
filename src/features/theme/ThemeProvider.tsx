import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";
import { getInitialTheme, themeStorageKey, type Theme } from "./theme";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.dataset.theme = theme;
    rootElement.style.colorScheme = theme === "light" ? "light" : "dark";

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Motyw nadal działa w bieżącej sesji, nawet bez dostępu do storage.
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
