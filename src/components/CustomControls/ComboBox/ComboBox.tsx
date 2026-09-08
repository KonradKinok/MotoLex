import type { ReactNode } from "react";
import type { StylesConfig } from "react-select";

export interface ComboBoxOption<TValue = number | string> {
  label: string;
  value: TValue;
  icon?: ReactNode;
  isDisabled?: boolean;
}

/** Keep label as text for searching and screen readers. */
export function formatComboBoxOption<TValue>(option: ComboBoxOption<TValue>) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {option.icon && (
        <span aria-hidden="true" style={{ display: "inline-flex", flexShrink: 0 }}>
          {option.icon}
        </span>
      )}
      <span>{option.label}</span>
    </span>
  );
}

/** Create outside the component, using the same value type as its options. */
export function createComboBoxStyles<TValue = number | string>(): StylesConfig<
  ComboBoxOption<TValue>,
  false
> {
  return {
    container: (base) => ({ ...base, width: "100%", minWidth: 0 }),
    control: (base, state) => {
      const invalid = state.selectProps["aria-invalid"];
      const hasError = invalid === true || invalid === "true";
      const borderColor = hasError
        ? "var(--color-error)"
        : state.isFocused
          ? "var(--color-focus)"
          : "var(--color-border)";

      return {
        ...base,
        minHeight: "3rem",
        borderWidth: 2,
        borderRadius: "var(--radius-medium)",
        backgroundColor: state.isDisabled
          ? "var(--color-surface-muted)"
          : "var(--color-surface)",
        borderColor,
        boxShadow: "none",
        outline: state.isFocused ? "2px solid var(--color-focus)" : undefined,
        outlineOffset: 2,
        cursor: state.isDisabled ? "not-allowed" : "pointer",
        ":hover": {
          borderColor:
            hasError || state.isFocused || state.isDisabled
              ? borderColor
              : "var(--color-link)",
        },
      };
    },
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--color-active-background)"
        : state.isFocused && !state.isDisabled
          ? "var(--color-surface-muted)"
          : "var(--color-surface)",
      color: state.isSelected
        ? "var(--color-active-text)"
        : state.isDisabled
          ? "var(--color-text-muted)"
          : "var(--color-text)",
      // Focus must remain visible when both surfaces are black in contrast mode.
      outline: state.isFocused && !state.isDisabled
        ? "2px solid var(--color-focus)"
        : undefined,
      outlineOffset: -2,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      fontWeight: state.isSelected ? 600 : 400,
      ":active": {
        backgroundColor: state.isDisabled ? undefined : "var(--color-active-background)",
        color: state.isDisabled ? undefined : "var(--color-active-text)",
      },
    }),
    singleValue: (base, state) => ({
      ...base,
      color: state.isDisabled ? "var(--color-text-muted)" : "var(--color-text)",
    }),
    input: (base) => ({ ...base, color: "var(--color-text)" }),
    placeholder: (base) => ({ ...base, color: "var(--color-text-muted)" }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-medium)",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--color-text-muted)",
      ":hover": { color: "var(--color-link-hover)" },
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "var(--color-text-muted)",
      ":hover": { color: "var(--color-link-hover)" },
    }),
    indicatorSeparator: (base) => ({ ...base, backgroundColor: "var(--color-border)" }),
    groupHeading: (base) => ({ ...base, color: "var(--color-text-muted)" }),
    noOptionsMessage: (base) => ({ ...base, color: "var(--color-text-muted)" }),
    loadingMessage: (base) => ({ ...base, color: "var(--color-text-muted)" }),
    loadingIndicator: (base) => ({ ...base, color: "var(--color-text-muted)" }),
  };
}

export const customStylesComboBox = createComboBoxStyles();
