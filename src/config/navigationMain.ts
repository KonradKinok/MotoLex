import {
  BadgeCheck,
  Calculator,
  Car,
  CircleDollarSign,
  Files,
  FileX,
  ScanLine,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  children?: NavigationItem[];
};

const calculatorItems: NavigationItem[] = [
  {
    label: "Kary",
    to: "/kalkulator/kary",
    icon: CircleDollarSign,
  },
  {
    label: "VIN",
    to: "/kalkulator/vin",
    icon: ScanLine,
  },
  {
    label: "Trwała utrata",
    to: "/kalkulator/trwala-utrata",
    icon: FileX,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    label: "Dla właścicieli pojazdów",
    to: "/dla-wlascicieli",
    icon: Car,
    children: [
      {
        label: "Jak sprawdzić dokumenty?",
        to: "/dla-wlascicieli/dokumenty",
        icon: Files,
      },
    ],
  },
  {
    label: "Dla pracowników wydziału",
    to: "/dla-pracownikow",
    icon: Users,
    children: [
      {
        label: "Homologacja",
        to: "/dla-pracownikow/homologacja",
        icon: BadgeCheck,
      },
    ],
  },
  {
    label: "Kalkulatory",
    to: "/kalkulator",
    icon: Calculator,
    children: calculatorItems,
  },
];
