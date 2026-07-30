import { createContext, useContext } from "react";
import type { Theme } from "./theme";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme musi być użyty wewnątrz ThemeProvider");
  }

  return context;
}
