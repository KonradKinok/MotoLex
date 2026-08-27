import type { ChangeEventHandler } from "react";
import styles from "./CheckBoxSlider.module.scss";

interface CheckBoxSliderProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  layout: "vertical" | "horizontal";
  labelClassName?: string;
  titleClassName?: string;
  inputClassName?: string;
}

export function CheckBoxSlider({
  id,
  name,
  label,
  checked,
  onChange,
  labelClassName,
  titleClassName,
  inputClassName,
  layout,
}: CheckBoxSliderProps) {
  return (
    <label
      className={`${styles.labelCheckBoxSlider} ${labelClassName ?? ""} ${
        layout === "horizontal" ? styles.horizontal : styles.vertical
      }`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        className={`${styles.toggleSwitch} ${inputClassName ?? ""}`}
      />
      <span className={`${titleClassName ?? ""}`}>{label}</span>
    </label>
  );
}
