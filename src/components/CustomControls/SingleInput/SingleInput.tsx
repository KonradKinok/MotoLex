import { useId, useImperativeHandle, useRef } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { X } from "lucide-react";
import styles from "./SingleInput.module.scss";

type InputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "number"
  | "date"
  | "datetime-local"
  | "month"
  | "time"
  | "week";

export interface SingleInputProps extends Omit<
  ComponentPropsWithRef<"input">,
  "type" | "value" | "defaultValue" | "children"
> {
  label: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: InputType;
  error?: string;
  hint?: string;
  iconLeft?: ReactNode;
  containerClassName?: string;
  /** Update the controlled value to an empty string. Omit to hide the clear button. */
  onClear?: (input: HTMLInputElement) => void;
  clearLabel?: string;
}

/** Supports controlled and uncontrolled fields; validation belongs to the parent. */
export function SingleInput({
  label,
  value,
  defaultValue,
  type = "text",
  error,
  hint,
  iconLeft,
  containerClassName,
  className,
  id,
  ref,
  disabled,
  readOnly,
  required,
  placeholder,
  onClear,
  clearLabel = `Wyczyść pole: ${label}`,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  ...inputProps
}: SingleInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!, []);
  const hasError = Boolean(error);
  const canClear = Boolean(
    onClear && (value === undefined || String(value).length) && !disabled && !readOnly,
  );
  // Native date/time controls contain segments even when their value is empty.
  const alwaysFloating =
    Boolean(placeholder) ||
    ["date", "datetime-local", "month", "time", "week"].includes(type);
  const descriptionIds =
    [describedBy, hint && `${inputId}-hint`, hasError && `${inputId}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div
      className={[styles.container, containerClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={styles.control}
        data-icon={iconLeft ? "true" : undefined}
        data-clear={canClear ? "true" : undefined}
        data-floating={alwaysFloating ? "true" : undefined}
      >
        <input
          {...inputProps}
          ref={inputRef}
          id={inputId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder || " "}
          aria-invalid={hasError ? true : ariaInvalid}
          aria-describedby={descriptionIds}
          className={[styles.input, className].filter(Boolean).join(" ")}
        />
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
        {iconLeft && (
          <span className={styles.iconLeft} aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {canClear && (
          <button
            type="button"
            className={styles.clearButton}
            aria-label={clearLabel}
            aria-controls={inputId}
            onClick={() => {
              const input = inputRef.current;
              if (!input) return;

              if (value === undefined) {
                input.value = "";
              }
              onClear?.(input);
              input.focus();
            }}
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
      </div>
      {hint && (
        <p className={styles.hint} id={`${inputId}-hint`}>
          {hint}
        </p>
      )}
      <div aria-live="polite" aria-atomic="true">
        {hasError && (
          <p className={styles.error} id={`${inputId}-error`}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
