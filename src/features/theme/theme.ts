export const themes = ["light", "dark", "contrast"] as const;

export type Theme = (typeof themes)[number];

export const themeStorageKey = "motolex-theme";

export function isTheme(value: string | null): value is Theme {
  return themes.some((theme) => theme === value);
}

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (isTheme(savedTheme)) {
      return savedTheme;
    }
  } catch {
    // Storage może być niedostępny, np. w restrykcyjnym trybie prywatnym.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
