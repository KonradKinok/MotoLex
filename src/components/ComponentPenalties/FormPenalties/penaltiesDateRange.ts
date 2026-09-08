export const PENALTIES_MIN_DATE = new Date(2024, 0, 1);
export const PENALTIES_MAX_DATE = new Date(2099, 11, 31);

function getLocalDayTimestamp(date: Date): number {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ).getTime();
}

export function isDateInPenaltiesRange(value: unknown): value is Date {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    return false;
  }

  const selectedDay = getLocalDayTimestamp(value);
  const minimumDay = getLocalDayTimestamp(PENALTIES_MIN_DATE);
  const maximumDay = getLocalDayTimestamp(PENALTIES_MAX_DATE);

  return selectedDay >= minimumDay && selectedDay <= maximumDay;
}