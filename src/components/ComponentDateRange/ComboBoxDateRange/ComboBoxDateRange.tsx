import { useId } from "react";
import Select from "react-select";
import { pluralizeWord } from "../../globalFunctions/globalFunctions";
import {
  administrativeDateRange,
  type AdministrativeDateRangeType,
} from "../../globalFunctions/administrativeDateRangeTable";
import {
  createComboBoxStyles,
  formatComboBoxOption,
} from "../../CustomControls/ComboBox/ComboBox";
import styles from "./ComboBoxDateRange.module.scss";

const comboBoxOptions = getComboBoxData(administrativeDateRange);
const groupNames = [
  ...new Set(administrativeDateRange.map((item) => item.group)),
].sort((a, b) => a.localeCompare(b, "pl"));

const groupedOptions = groupNames.map((group) => ({
  label: group,
  options: comboBoxOptions.filter((option) => option.value.group === group),
}));
const comboBoxStyles = createComboBoxStyles<AdministrativeDateRangeType>();

export interface ComboBoxDateRangeProps {
  selectedValue: AdministrativeDateRangeType | null;
  onChange: (value: AdministrativeDateRangeType | null) => void;
}

export default function ComboBoxDateRange({
  selectedValue,
  onChange,
}: ComboBoxDateRangeProps) {
  const id = useId();

  const selectedOption =
    comboBoxOptions.find((option) => option.value.id === selectedValue?.id) ??
    null;

  return (
    <div className={styles.containerComboBoxDateRange}>
      <label className={styles.labelComboBoxDateRange} htmlFor={id}>
        Rodzaj terminu:
      </label>
      <Select
        inputId={id}
        instanceId={id}
        name="dateRange"
        options={groupedOptions}
        formatOptionLabel={formatComboBoxOption}
        styles={comboBoxStyles}
        getOptionValue={(option) => String(option.value.id)}
        value={selectedOption}
        onChange={(option) => onChange(option?.value ?? null)}
        placeholder="Wybierz opcję…"
        noOptionsMessage={() => "Brak pasujących opcji"}
        isSearchable={false}
        required
      />
    </div>
  );
}

function getComboBoxData(
  administrativeDateRange: readonly AdministrativeDateRangeType[],
) {
  return [...administrativeDateRange]
    .sort((a, b) =>
      a.description.localeCompare(b.description, "pl", {
        sensitivity: "base",
      }),
    )
    .map((item) => ({
      value: item,
      label: `${item.description} (${pluralizeWord(
        item.timeAmount,
        item.timeUnit.pl,
      )})`,
      icon: item.icon,
    }));
}
