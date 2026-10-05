import {
  BadgeCheck,
  Calculator,
  Car,
  CircleDollarSign,
  Files,
  FileX,
  ScanLine,
  Users,
  CalendarRange,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROUTES } from "./routes";
import { vehicleCategoryGroups } from "../LegalRegulations/vehicleCategoriesTheory";
import { imagesPageCollection } from "./imagesTable";

export type NavigationItem = {
  label: string;
  fullLabel: string;
  to: string;
  icon: LucideIcon;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  children?: NavigationItem[];
};


const homologationVehicleCategoriesItems: NavigationItem[] =
  vehicleCategoryGroups.map((group) => ({
    label: group.name,
    fullLabel: "",
    to: `${ROUTES.vehicleCategories}/${group.name.toLowerCase()}`,
    icon: group.icon,
    description: "",
    image: {
      src: "",
      alt: "",
      width: 600,
      height: 800,
    },
  }));

const homologationVehicleCategories: NavigationItem[] = [
  {
    label: "Kategorie pojazdów",
    fullLabel: "Kategorie homologacyjne pojazdów",
    to: ROUTES.vehicleCategories,
    icon: BadgeCheck,
    description: "Poznaj kategorie homologacyjne pojazdów oraz przepisy homologacyjne wpływające na wymagania dotyczące ich rejestracji.",
    image: {
      src: imagesPageCollection.homologation.vehicleCategories,
      alt: "",
      width: 600,
      height: 800,
    },
    children: homologationVehicleCategoriesItems,
  },
];

const vehicleOwnersItems: NavigationItem[] = [
  {
    label: "Jak sprawdzić dokumenty?",
    fullLabel: "Jak sprawdzić dokumenty?",
    to: ROUTES.documents,
    icon: Files,
    description: "Tutaj znajdziesz informacje na temat najważniejszych dokumentów, które powinieneś sprawdzić przed dokonaniem transakcji i wizytą w wydziale komunikacji.",
    image: {
      src: imagesPageCollection.vehicleOwners.documents,
      alt: "",
      width: 600,
      height: 800,
    },
  },
];

const employeesItems: NavigationItem[] = [
  {
    label: "Homologacja",
    fullLabel: "Homologacja",
    to: ROUTES.homologation,
    icon: BadgeCheck,
    description: "Poznaj kategorie pojazdów i informacje dotyczące homologacji przydatne w sprawach związanych z rejestracją pojazdów.",
    image: {
      src: imagesPageCollection.employees.homologation,
      alt: "",
      width: 600,
      height: 800,
    },
    children: homologationVehicleCategories,
  },
];

const calculatorItems: NavigationItem[] = [
  {
    label: "Kary",
    fullLabel: "Kalkulator kar",
    to: ROUTES.penaltiesCalculator,
    icon: CircleDollarSign,
    description: "Sprawdź terminy i wysokość kar za niezłożenie wniosku o rejestrację lub niezgłoszenie zbycia pojazdu w terminie.",
    image: {
      src: imagesPageCollection.calculator.penaltiesCalculator,
      alt: "",
      width: 600,
      height: 800,
    },
  },
  {
    label: "VIN",
    fullLabel: "Kalkulator VIN",
    to: ROUTES.vinCalculator,
    icon: ScanLine,
    description: "Sprawdź długość numeru VIN, dozwolone znaki i poprawność cyfry kontrolnej.",
    image: {
      src: imagesPageCollection.calculator.vinCalculator,
      alt: "",
      width: 600,
      height: 800,
    },
  },
  {
    label: "Trwała utrata",
    fullLabel: "Kalkulator trwałej utraty",
    to: ROUTES.permanentLossCalculator,
    icon: FileX,
    description: "Oblicz opłatę w przypadku wyrejestrowania pojazdu z powodu trwałej i zupełnej utraty posiadania pojazdu bez zmiany prawa własności.",
    image: {
      src: imagesPageCollection.calculator.permanentLossCalculator,
      alt: "",
      width: 600,
      height: 800,
    },
  },
  {
    label: "Terminy administracyjne",
    fullLabel: "Kalkulator terminów administracyjnych",
    to: ROUTES.administrativeDeadlines,
    icon: CalendarRange,
    description: "Sprawdź terminy administracyjne. Wybierz rodzaj sprawy i datę początkową, aby obliczyć ostatni dzień terminu administracyjnego i dzień po jego upływie.",
    image: {
      src: imagesPageCollection.calculator.administrativeDeadlinesCalculator,
      alt: "",
      width: 600,
      height: 800,
    },
  },
];

//Dane do Menu
export const navigationItems: NavigationItem[] = [
  {
    label: "Dla właścicieli pojazdów",
    fullLabel: "Dla właścicieli pojazdów",
    to: ROUTES.vehicleOwners,
    icon: Car,
    description: "Informacje o dokumentach, terminach, opłatach, wnioskach i umowach dotyczących pojazdów.",
    image: {
      src: imagesPageCollection.home.vehicleOwners,
      alt: "",
      width: 600,
      height: 800,
    },
    children: vehicleOwnersItems,
  },
  {
    label: "Dla pracowników wydziału",
    fullLabel: "Dla pracowników wydziału komunikacji",
    to: ROUTES.employees,
    icon: Users,
    description: "W tym miejscu znajdują się komunikaty instytucji, orzeczenia oraz specjalistyczne materiały dla pracowników wydziałów komunikacji.",
    image: {
      src: imagesPageCollection.home.employees,
      alt: "",
      width: 600,
      height: 800,
    },
    children: employeesItems,
  },
  {
    label: "Kalkulatory",
    fullLabel: "Kalkulatory",
    to: ROUTES.calculator,
    icon: Calculator,
    description: "Skorzystaj z kalkulatorów kar, numeru VIN, trwałej utraty pojazdu i terminów administracyjnych. Wybierz narzędzie i wykonaj obliczenia potrzebne w sprawach związanych z pojazdami.",
    image: {
      src: imagesPageCollection.home.calculator,
      alt: "",
      width: 600,
      height: 800,
    },
    children: calculatorItems,
  },
];
