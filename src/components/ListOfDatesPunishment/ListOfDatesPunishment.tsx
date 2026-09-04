import { useEffect, useMemo, useRef } from "react";
import { Calendar, Banknote } from "lucide-react";
import { formatDate } from "../globalFunctions/globalFunctions";
import { type DayEntry, type DayKind } from "../globalFunctions/calculator";
import { type CalculationResult } from "../globalFunctions/calculator";
import styles from "./ListOfDatesPunishment.module.scss";

const dayKindClassNames: Record<DayKind, string> = {
  start: styles.iconDayOfAgreement,
  regularDay: styles.iconRegularDay,
  nonWorkingDay: styles.iconNonWorkingDay,
  lastDay: styles.iconDayBeforePunish,
  penalty: styles.iconDayOfPunish,
};

interface ListOfDatesPunishmentProps {
  calculationResults: CalculationResult | null;
  detailedData: boolean;
}

export function ListOfDatesPunishment({
  calculationResults,
  detailedData,
}: ListOfDatesPunishmentProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const currentList = useMemo(() => {
    const list = calculationResults?.listOfDays ?? [];

    if (detailedData) {
      return list;
    }

    return list.filter(({ kind }) =>
      ["start", "lastDay", "penalty"].includes(kind),
    );
  }, [detailedData, calculationResults?.listOfDays]);

  useEffect(() => {
    if (!calculationResults?.listOfDays.length) {
      return;
    }

    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [calculationResults, detailedData]);

  return (
    <ul ref={listRef} className={styles.containerListOfDays}>
      {calculationResults && (
        <li
          className={`${styles.itemListOfDays} ${styles.header}`}
          key={"column-title"}
        >
          <div>Kolejny dzień</div>
          <div>Data</div>
          <div>Dzień terminu</div>
          <div>Opis</div>
        </li>
      )}

      {currentList.map((listOfDates: DayEntry) => {
        const IconComponent =
          listOfDates.iconName === "Calendar" ? Calendar : Banknote;

        const nextDayOfTheDeadline =
          listOfDates.nextDayOfTheDeadlineNumber?.toString().padStart(3, "0") ??
          "---";

        return (
          <li
            className={styles.itemListOfDays}
            key={`${listOfDates.kind}-${listOfDates.nextDayDate.getTime()}`}
          >
            <div>{`${listOfDates.nextDayNumber.toString().padStart(3, "0")}.`}</div>
            <div>{`${formatDate(listOfDates.nextDayDate)} ${listOfDates.nextDayDate.toLocaleString(
              "pl-PL",
              {
                weekday: "short",
              },
            )}`}</div>
            <div className={styles.containerIcon}>
              <IconComponent
                className={`${styles.icon} ${dayKindClassNames[listOfDates.kind]}`}
              />
              <span className={styles.textOverlay}>{nextDayOfTheDeadline}</span>
            </div>
            <div>{listOfDates.description}</div>
          </li>
        );
      })}
    </ul>
  );
}
