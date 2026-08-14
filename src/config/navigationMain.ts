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
import { ROUTES } from "./routes";

export type NavigationItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  children?: NavigationItem[];
};

const vehicleOwnersItems: NavigationItem[] = [
  {
    label: "Jak sprawdzić dokumenty?",
    to: ROUTES.documents,
    icon: Files,
  },
];

const workersItems: NavigationItem[] = [
  {
    label: "Homologacja",
    to: ROUTES.homologation,
    icon: BadgeCheck,
  },
];

const calculatorItems: NavigationItem[] = [
  {
    label: "Kary",
    to: ROUTES.penaltiesCalculator,
    icon: CircleDollarSign,
  },
  {
    label: "VIN",
    to: ROUTES.vinCalculator,
    icon: ScanLine,
  },
  {
    label: "Trwała utrata",
    to: ROUTES.permanentLossCalculator,
    icon: FileX,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    label: "Dla właścicieli pojazdów",
    to: ROUTES.vehicleOwners,
    icon: Car,
    children: vehicleOwnersItems,
  },
  {
    label: "Dla pracowników wydziału",
    to: ROUTES.employees,
    icon: Users,
    children: workersItems,
  },
  {
    label: "Kalkulatory",
    to: ROUTES.calculator,
    icon: Calculator,
    children: calculatorItems,
  },
];
