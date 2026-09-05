// https://reactdatepicker.com/
import { forwardRef, type ButtonHTMLAttributes } from "react";
import DatePicker from "react-datepicker";
import { pl } from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";
import scss from "./DateTimePicker.module.scss";

interface DateTimePickerProps {
  dateTimePickerDate: Date | null;
  onChange: (date: Date | null) => void;
  isClearable?: boolean;
  name?: string;
  id?: string;
  classNameButton?: string;
  classNameIcon?: string;
  minDate?: Date;
  maxDate?: Date;
  portalId?: string;
}

interface CustomInputProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value"
> {
  value?: string;
  iconClassName?: string;
}

const CustomDateInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, className, iconClassName = "", ...buttonProps }, ref) => (
    <button {...buttonProps} ref={ref} type="button" className={className}>
      <CalendarDays
        aria-hidden="true"
        focusable="false"
        className={`${scss.icon} ${iconClassName}`}
      />
      <span className={scss.value}>{value || "Wybierz datę"}</span>
    </button>
  ),
);

CustomDateInput.displayName = "CustomDateInput";

export function DateTimePicker({
  dateTimePickerDate,
  onChange,
  isClearable = true,
  name = "dateTimePicker",
  id = "dateTimePicker",
  classNameButton = "",
  classNameIcon = "",
  minDate = new Date(2010, 0, 1),
  maxDate,
  portalId = "datepicker-portal-root",
}: DateTimePickerProps) {
  return (
    <DatePicker
      customInput={
        <CustomDateInput
          className={`${scss["input-button"]} ${classNameButton}`}
          iconClassName={classNameIcon}
        />
      }
      dateFormat="dd.MM.yyyy"
      selected={dateTimePickerDate}
      onChange={(date: Date | null) => onChange(date)}
      openToDate={dateTimePickerDate ?? undefined}
      minDate={minDate}
      maxDate={maxDate}
      todayButton="Dzisiaj"
      name={name}
      id={id}
      portalId={portalId}
      locale={pl}
      calendarClassName={scss["month-container"]} //months style
      weekDayClassName={() => scss["week-day"]}
      dayClassName={(date) => {
        // Sprawdzenie, czy dany dzień jest wybrany
        const isSelected =
          dateTimePickerDate &&
          date.toDateString() === dateTimePickerDate.toDateString();
        return isSelected ? scss["selected-day"] : scss["day-class"];
      }}
      popperClassName={scss["drop-down-control"]}
      wrapperClassName={scss.wrapper}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      isClearable={isClearable}
      placeholderText="Wpisz datę"
      dropdownMode="select"
      // readOnly
      // onCalendarClose={handleCalendarClose}
    >
      {/* <div style={{ color: "red" }}>Don't forget to check the weather!</div> */}
    </DatePicker>
  );
}
