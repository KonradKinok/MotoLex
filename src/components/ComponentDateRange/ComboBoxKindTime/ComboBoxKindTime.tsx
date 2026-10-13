import { useId } from "react";
import Select from "react-select";
import type { TimeUnitOption } from "../../../types/globalTypes";
import { timeUnits } from "../../../config/administrativeDateRangeTable";
import { capitalizeFirstLetter } from "../../globalFunctions/globalFunctions";
import {
  createComboBoxStyles,
  formatComboBoxOption,
} from "../../CustomControls/ComboBox/ComboBox";
import styles from "./ComboBoxKindTime.module.scss";

const comboBoxOptions = getComboBoxData(timeUnits);
const comboBoxStyles = createComboBoxStyles<string>();

export interface ComboBoxKindTimeProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function ComboBoxKindTime({
  selectedValue,
  onChange,
}: ComboBoxKindTimeProps) {
  const id = useId();

  const selectedOption =
    comboBoxOptions.find((option) => option.value === selectedValue) ?? null;

  return (
    <div className={styles.containerComboBoxDateRange}>
      <label className={styles.labelComboBoxDateRange} htmlFor={id}>
        Wybierz jednostkę czasu:
      </label>
      <Select
        inputId={id}
        instanceId={id}
        name="kindOfTime"
        options={comboBoxOptions}
        formatOptionLabel={formatComboBoxOption}
        styles={comboBoxStyles}
        getOptionValue={(option) => String(option.value)}
        value={selectedOption}
        onChange={(option) => {
          if (option === null) return;
          onChange(option.value);
        }}
        placeholder="Wybierz opcję…"
        noOptionsMessage={() => "Brak pasujących opcji"}
        isSearchable={false}
        required
      />
    </div>
  );
}

function getComboBoxData(timeUnits: readonly TimeUnitOption[]) {
  const options = timeUnits.map((item) => ({
    value: item.en,
    label: capitalizeFirstLetter(item.pl),
    icon: item.icon,
  }));
  return options;
}
