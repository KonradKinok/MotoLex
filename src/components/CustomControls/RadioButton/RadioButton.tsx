import type { ChangeEventHandler } from "react";
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  layout: "vertical" | "horizontal";
  labelClassName?: string;
  titleClassName?: string;
  inputClassName?: string;
}

export function RadioButton({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  labelClassName,
  titleClassName,
  inputClassName,
  layout,
}: RadioButtonProps) {
  return (
    <label
      className={`${styles.labelRadio} ${labelClassName ?? ""} ${
        layout === "horizontal" ? styles.horizontal : styles.vertical
      }`}
      htmlFor={id}
    >
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`${styles.toggleSwitch} ${inputClassName ?? ""}`}
      />
      <span className={`${titleClassName ?? ""}`}>{label}</span>
    </label>
  );
}
