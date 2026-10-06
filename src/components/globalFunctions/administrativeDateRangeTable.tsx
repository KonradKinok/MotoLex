import type { ReactNode } from "react";
import { CalendarDays, CalendarClock } from "lucide-react";
import type { TimeUnit } from "../../types/globalTypes";

export type AdministrativeDateRangeType = {
  id: number;
  description: string;
  descriptionSelectedDate: string;
  resultLastDayDescription: string;
  resultAfterDayDescription: string;
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
    resultLastDayDescription: "ostatni dzień na odwołanie od decyzji",
    resultAfterDayDescription:
      "dzień po upływie terminu na wniesienie odwołania",
    timeAmount: 14,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 2,
    description: "termin na zażalenie na postanowienie organu I instancji",
    descriptionSelectedDate: "data doręczenia postanowienia",
    resultLastDayDescription: "ostatni dzień na zażalenie na postanowienie",
    resultAfterDayDescription:
      "dzień po upływie terminu na wniesienie zażalenia",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarDays size={20} />,
    group: "Dla interesantów",
  },
  {
    id: 3,
    description: "termin na skargę do WSA",
    descriptionSelectedDate:
      "data doręczenia rozstrzygnięcia w sprawie (np. decyzji, postanowienia)",
    resultLastDayDescription: "ostatni dzień na wniesienie skargi do WSA",
    resultAfterDayDescription:
      "dzień po upływie terminu na wniesienie skargi do WSA",
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
    resultLastDayDescription: "data uznania nieodebranego pisma za doręczone",
    resultAfterDayDescription: "dzień po uznaniu pisma za doręczone",
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
    resultLastDayDescription: "ostatni dzień na przesłanie odwołania do SKO",
    resultAfterDayDescription: "dzień po terminie przesłania odwołania do SKO",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarClock size={20} />,
    group: "Dla pracowników urzędu",
  },
  {
    id: 6,
    description: "termin na przesłanie ponaglenia do SKO",
    descriptionSelectedDate: "data otrzymania ponaglenia przez organ",
    resultLastDayDescription: "ostatni dzień na przesłanie ponaglenia do SKO",
    resultAfterDayDescription:
      "dzień po upływie terminu na przekazanie ponaglenia do SKO",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarClock size={20} />,
    group: "Dla pracowników urzędu",
  },
  {
    id: 7,
    description:
      "termin na przesłanie zażalenia na postanowienie organu I instancji do SKO",
    descriptionSelectedDate: "data otrzymania zażalenia przez organ",
    resultLastDayDescription: "ostatni dzień do przesłania zażalenia do SKO",
    resultAfterDayDescription: "dzień po terminie przesłania zażalenia do SKO",
    timeAmount: 7,
    timeUnit: { en: "day", pl: "dzień" },
    icon: <CalendarClock size={20} />,
    group: "Dla pracowników urzędu",
  },
];
