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
import { vehicleCategoryGroups } from "../LegalRegulations/vehicleCategoriesTheory";

export type NavigationItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  children?: NavigationItem[];
};


const homologationVehicleCategoriesItems: NavigationItem[] =
  vehicleCategoryGroups.map((group) => ({
    label: group.name,
    to: `${ROUTES.vehicleCategories}/${group.name.toLowerCase()}`,
    icon: group.icon,
  }));

const homologationVehicleCategories: NavigationItem[] = [
  {
    label: "Kategorie pojazdów",
    to: ROUTES.vehicleCategories,
    icon: BadgeCheck,
    children: homologationVehicleCategoriesItems,
  },
];

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
    children: homologationVehicleCategories,
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

//Dane do Menu
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
