import type { ReactNode } from "react";
import { CalendarDays, CalendarClock } from "lucide-react";
import type { TimeUnit } from "../../types/globalTypes";

export type AdministrativeDateRangeType = {
  id: number;
  description: string;
  descriptionSelectedDate: string;
  timeAmount: number;
  timeUnit: TimeUnit;
  icon: ReactNode;
  group: "Dla interesantów" | "Dla pracowników urzędu";
};

export const administrativeDateRange: readonly AdministrativeDateRangeType[] = [
  {
    id: 1,
    description:
      "termin na odwołanie od decyzji administracyjnej organu I instancji",
    descriptionSelectedDate: "data doręczenia decyzji",
    timeAmount: 14,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 2,
    description: "termin na zażalenie na postanowienie",
    descriptionSelectedDate: "data doręczenia postanowienia",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 3,
    description: "termin na skargę do WSA",
    descriptionSelectedDate: "data doręczenia orzeczenia",
    timeAmount: 30,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 4,
    description: "doręczenie awizowanego pisma (fikcja doręczenia)",
    descriptionSelectedDate:
      "data pozostawienia pierwszego zawiadomienia (awiza)",
    timeAmount: 14,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 5,
    description:
      "termin na przesłanie odwołania od decyzji organu I instancji do SKO",
    descriptionSelectedDate: "data otrzymania odwołania przez organ",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarClock size={20} />,
    group: "Dla pracowników urzędu",
  },
  {
    id: 6,
    description: "termin na przesłanie ponaglenia do SKO",
    descriptionSelectedDate: "data otrzymania ponaglenia przez organ",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarClock size={20} />,
    group: "Dla pracowników urzędu",
  },
];
