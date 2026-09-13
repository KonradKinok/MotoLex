import {
  type LucideIcon,
  Scooter,
  Motorbike,
  Car,
  Van,
  Trailer,
  Tractor,

} from "lucide-react";

export type VehicleCategoryDefinition = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type VehicleCategoryGroupDefinition = {
  name: string;
  description: string;
  categories: readonly VehicleCategoryDefinition[];
  icon: LucideIcon;
};
export const category_M = [
  {
    name: "M1",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu pasażerów i ich bagażu mające nie więcej niż osiem miejsc siedzących poza miejscem siedzącym kierowcy i niemające miejsc dla pasażerów stojących, niezależnie od tego, czy liczba miejsc siedzących jest ograniczona do miejsca siedzącego kierowcy.",
    icon: Car,
  },
  {
    name: "M2",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu pasażerów i ich bagażu o masie maksymalnej nieprzekraczającej 5 ton, mające więcej niż osiem miejsc siedzących poza miejscem siedzącym kierowcy, niezależnie od tego, czy w tych pojazdach silnikowych mogą znajdować się miejsca dla pasażerów stojących",
    icon: Car,
  },
  {
    name: "M3",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu pasażerów i ich bagażu o masie maksymalnej przekraczającej 5 ton, mające więcej niż osiem miejsc siedzących poza miejscem siedzącym kierowcy niezależnie od tego, czy w tych pojazdach silnikowych mogą znajdować się miejsca dla pasażerów stojących",
    icon: Car,
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_N = [
  {
    name: "N1",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu towarów o masie maksymalnej nieprzekraczającej 3,5 tony.",
    icon: Van,
  },
  {
    name: "N2",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu towarów o masie maksymalnej przekraczającej 3,5 tony, ale nieprzekraczającej 12 ton.",
    icon: Van,
  },
  {
    name: "N3",
    description: "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu towarów o masie maksymalnej przekraczającej 12 ton.",
    icon: Van,
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_O = [
  {
    name: "O1",
    description: "Przyczepy o masie maksymalnej nieprzekraczającej 0,75 tony.",
    icon: Trailer,
  },
  {
    name: "O2",
    description: "Przyczepy o masie maksymalnej przekraczającej 0,75 tony, ale nieprzekraczającej 3,5 tony.",
    icon: Trailer,
  },
  {
    name: "O3",
    description: "Przyczepy o masie maksymalnej przekraczającej 3,5 tony, ale nieprzekraczającej 10 ton.",
    icon: Trailer,
  },
  {
    name: "O4",
    description: "Przyczepy o masie maksymalnej przekraczającej 10 ton.",
    icon: Trailer,
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_L = [
  {
    name: "L1eB",
    description: "Dwukołowy motorower",
    icon: Scooter
  },
  {
    name: "L2e-P",
    description: "Trzykołowy motorower przeznaczony do przewozu pasażerów.",
    icon: Scooter
  },
  {
    name: "L2e-U",
    description: "Trzykołowy motorower przeznaczony do celów użytkowych.",
    icon: Scooter
  },
  {
    name: "L3e-A1",
    description: "Dwukołowy motocykl o niskich osiągach.",
    icon: Motorbike
  },
  {
    name: "L3e-A2",
    description: "Dwukołowy motocykl o średnich osiągach.",
    icon: Motorbike
  },
  {
    name: "L3e-A3",
    description: "Dwukołowy motocykl o wysokich osiągach.",
    icon: Motorbike
  },
  {
    name: "L4e",
    description: "Dwukołowy motocykl z bocznym wózkiem.",
    icon: Motorbike
  },
  {
    name: "L5e-A",
    description: "Trzykołowy pojazd silnikowy przeznaczony głównie do przewozu pasażerów.",
    icon: Motorbike
  },
  {
    name: "L5e-B",
    description: "Trzykołowy pojazd silnikowy przeznaczony wyłącznie do transportu towarów.",
    icon: Motorbike
  },
  {
    name: "L6eA",
    description: "Lekki czterokołowiec drogowy.",
    icon: Motorbike
  },
  {
    name: "L6eBU",
    description: "Lekki pojazd czterokołowy przeznaczony wyłącznie do transportu towarów.",
    icon: Motorbike
  },
  {
    name: "L6eBP",
    description: "Lekki pojazd czterokołowy głównie przeznaczony do przewozu pasażerów.",
    icon: Motorbike
  },
  {
    name: "L7e-A1",
    description: "Ciężki czterokołowiec drogowy A1.",
    icon: Motorbike
  },
  {
    name: "L7e-A2",
    description: "Ciężki czterokołowiec drogowy A2.",
    icon: Motorbike
  },
  {
    name: "L7e-B1",
    description: "Ciężki czterokołowiec terenowy.",
    icon: Motorbike
  },
  {
    name: "L7e-B2",
    description: "Pojazd typu side-by-side buggy.",
    icon: Motorbike
  },
  {
    name: "L7e-CU",
    description: "Ciężki czterokołowiec użytkowy przeznaczony wyłącznie do transportu towarów.",
    icon: Motorbike
  },
  {
    name: "L7e-CP",
    description: "Ciężki czterokołowiec głównie przeznaczony do przewozu pasażerów.",
    icon: Motorbike
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_T = [
  {
    name: "T1a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których rozstaw kół osi położonej najbliżej kierowcy wynosi nie mniej niż 1 150  mm, masa własna w stanie gotowości do jazdy przekracza 600 kg, a prześwit jest nie większy niż 1 000  mm; w przypadku ciągników ze zmianą pozycji przy zmienionym kierunku jazdy (z odwracanym siedzeniem i kołem kierownicy) oś najbliższa kierowcy to oś wyposażona w opony o największej średnicy.",
    icon: Tractor
  },
  {
    name: "T1b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których rozstaw kół osi położonej najbliżej kierowcy wynosi nie mniej niż 1 150  mm, masa własna w stanie gotowości do jazdy przekracza 600 kg, a prześwit jest nie większy niż 1 000  mm; w przypadku ciągników ze zmianą pozycji przy zmienionym kierunku jazdy (z odwracanym siedzeniem i kołem kierownicy) oś najbliższa kierowcy to oś wyposażona w opony o największej średnicy.",
    icon: Tractor
  },
  {
    name: "T2a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h o minimalnym rozstawie kół mniejszym niż 1 150  mm, masie własnej w stanie gotowości do jazdy przekraczającej 600 kg, prześwicie nie większym niż 600 mm; jeżeli iloraz wysokości środka ciężkości ciągnika (określonej zgodnie z normą ISO 789-6:1982 i mierzonej od podłoża) przez średni minimalny rozstaw kół każdej osi przekracza 0,90, maksymalna prędkość konstrukcyjna jest ograniczona do 30 km/h.",
    icon: Tractor
  },
  {
    name: "T2b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h o minimalnym rozstawie kół mniejszym niż 1 150  mm, masie własnej w stanie gotowości do jazdy przekraczającej 600 kg, prześwicie nie większym niż 600 mm; jeżeli iloraz wysokości środka ciężkości ciągnika (określonej zgodnie z normą ISO 789-6:1982 i mierzonej od podłoża) przez średni minimalny rozstaw kół każdej osi przekracza 0,90, maksymalna prędkość konstrukcyjna jest ograniczona do 30 km/h.",
    icon: Tractor
  },
  {
    name: "T3a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h o masie własnej w stanie gotowości do jazdy nieprzekraczającej 600 kg.",
    icon: Tractor
  },
  {
    name: "T3b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h o masie własnej w stanie gotowości do jazdy nieprzekraczającej 600 kg.",
    icon: Tractor
  },
  {
    name: "T4.1a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o dużym prześwicie) przeznaczone do pracy przy uprawach roślin wysokopiennych, na przykład winorośli. Charakteryzują się one wysokim podwoziem lub częścią podwozia, które umożliwia ruch równoległy do upraw, przy czym rząd lub rzędy upraw znajdują się między lewymi i prawymi kołami ciągnika. Ciągniki te są przystosowane do przenoszenia lub napędzania narzędzi mocowanych z przodu ciągnika, między jego osiami, z tyłu lub na skrzyni. Wysokość prześwitu ciągnika w pozycji roboczej mierzona prostopadle do rzędów upraw przekracza 1 000  mm. Jeżeli iloraz wysokości środka ciężkości ciągnika mierzonej od podłoża, przy zastosowaniu zwykle montowanych opon, przez średni rozstaw kół wszystkich osi przekracza 0,90, to maksymalna prędkość konstrukcyjna ciągnika nie może przekroczyć 30 km/h.",
    icon: Tractor
  },
  {
    name: "T4.1b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o dużym prześwicie) przeznaczone do pracy przy uprawach roślin wysokopiennych, na przykład winorośli. Charakteryzują się one wysokim podwoziem lub częścią podwozia, które umożliwia ruch równoległy do upraw, przy czym rząd lub rzędy upraw znajdują się między lewymi i prawymi kołami ciągnika. Ciągniki te są przystosowane do przenoszenia lub napędzania narzędzi mocowanych z przodu ciągnika, między jego osiami, z tyłu lub na skrzyni. Wysokość prześwitu ciągnika w pozycji roboczej mierzona prostopadle do rzędów upraw przekracza 1 000  mm. Jeżeli iloraz wysokości środka ciężkości ciągnika mierzonej od podłoża, przy zastosowaniu zwykle montowanych opon, przez średni rozstaw kół wszystkich osi przekracza 0,90, to maksymalna prędkość konstrukcyjna ciągnika nie może przekroczyć 30 km/h.",
    icon: Tractor
  },
  {
    name: "T4.2a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o bardzo dużej szerokości) charakteryzujące się dużymi wymiarami i przeznaczone przede wszystkim do pracy na rozległych obszarach uprawnych.",
    icon: Tractor
  },
  {
    name: "T4.2b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o bardzo dużej szerokości) charakteryzujące się dużymi wymiarami i przeznaczone przede wszystkim do pracy na rozległych obszarach uprawnych.",
    icon: Tractor
  },
  {
    name: "T4.3a",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o małym prześwicie) z napędem na cztery koła, których wyposażenie wymienne jest przeznaczone do zastosowań rolniczych lub leśnych i które charakteryzują się posiadaniem ramy nośnej, są wyposażone w jeden lub więcej wałów odbioru mocy, o technicznie dopuszczalnej masie nie większej niż 10 ton, przy czym stosunek tej masy do maksymalnej masy własnej w stanie gotowości do jazdy jest mniejszy niż 2,5, a wysokość środka ciężkości mierzona od podłoża przy zastosowaniu zwykle montowanych opon wynosi mniej niż 850 mm.",
    icon: Tractor
  },
  {
    name: "T4.3b",
    description: "Ciągniki kołowe o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o małym prześwicie) z napędem na cztery koła, których wyposażenie wymienne jest przeznaczone do zastosowań rolniczych lub leśnych i które charakteryzują się posiadaniem ramy nośnej, są wyposażone w jeden lub więcej wałów odbioru mocy, o technicznie dopuszczalnej masie nie większej niż 10 ton, przy czym stosunek tej masy do maksymalnej masy własnej w stanie gotowości do jazdy jest mniejszy niż 2,5, a wysokość środka ciężkości mierzona od podłoża przy zastosowaniu zwykle montowanych opon wynosi mniej niż 850 mm.",
    icon: Tractor
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_C = [
  {
    name: "C1a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których rozstaw kół osi położonej najbliżej kierowcy wynosi nie mniej niż 1 150  mm, masa własna w stanie gotowości do jazdy przekracza 600 kg, a prześwit jest nie większy niż 1 000  mm; w przypadku ciągników ze zmianą pozycji przy zmienionym kierunku jazdy (z odwracanym siedzeniem i kołem kierownicy) oś najbliższa kierowcy to oś wyposażona w opony o największej średnicy.",
    icon: Tractor
  },
  {
    name: "C1b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic  maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których rozstaw kół osi położonej najbliżej kierowcy wynosi nie mniej niż 1 150  mm, masa własna w stanie gotowości do jazdy przekracza 600 kg, a prześwit jest nie większy niż 1 000  mm; w przypadku ciągników ze zmianą pozycji przy zmienionym kierunku jazdy (z odwracanym siedzeniem i kołem kierownicy) oś najbliższa kierowcy to oś wyposażona w opony o największej średnicy.",
    icon: Tractor
  },
  {
    name: "C2a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h o minimalnym rozstawie kół mniejszym niż 1 150  mm, masie własnej w stanie gotowości do jazdy przekraczającej 600 kg, prześwicie nie większym niż 600 mm; jeżeli iloraz wysokości środka ciężkości ciągnika (określonej zgodnie z normą ISO 789-6:1982 i mierzonej od podłoża) przez średni minimalny rozstaw kół każdej osi przekracza 0,90, maksymalna prędkość konstrukcyjna jest ograniczona do 30 km/h.",
    icon: Tractor
  },
  {
    name: "C2b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h o minimalnym rozstawie kół mniejszym niż 1 150  mm, masie własnej w stanie gotowości do jazdy przekraczającej 600 kg, prześwicie nie większym niż 600 mm; jeżeli iloraz wysokości środka ciężkości ciągnika (określonej zgodnie z normą ISO 789-6:1982 i mierzonej od podłoża) przez średni minimalny rozstaw kół każdej osi przekracza 0,90, maksymalna prędkość konstrukcyjna jest ograniczona do 30 km/h.",
    icon: Tractor
  },
  {
    name: "C3a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h o masie własnej w stanie gotowości do jazdy nieprzekraczającej 600 kg.",
    icon: Tractor
  },
  {
    name: "C3b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h o masie własnej w stanie gotowości do jazdy nieprzekraczającej 600 kg.",
    icon: Tractor
  },
  {
    name: "C4.1a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o dużym prześwicie) przeznaczone do pracy przy uprawach roślin wysokopiennych, na przykład winorośli. Charakteryzują się one wysokim podwoziem lub częścią podwozia, które umożliwia ruch równoległy do upraw, przy czym rząd lub rzędy upraw znajdują się między lewymi i prawymi kołami ciągnika. Ciągniki te są przystosowane do przenoszenia lub napędzania narzędzi mocowanych z przodu ciągnika, między jego osiami, z tyłu lub na skrzyni. Wysokość prześwitu ciągnika w pozycji roboczej mierzona prostopadle do rzędów upraw przekracza 1 000  mm. Jeżeli iloraz wysokości środka ciężkości ciągnika mierzonej od podłoża, przy zastosowaniu zwykle montowanych opon, przez średni rozstaw kół wszystkich osi przekracza 0,90, to maksymalna prędkość konstrukcyjna ciągnika nie może przekroczyć 30 km/h.",
    icon: Tractor
  },
  {
    name: "C4.1b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o dużym prześwicie) przeznaczone do pracy przy uprawach roślin wysokopiennych, na przykład winorośli. Charakteryzują się one wysokim podwoziem lub częścią podwozia, które umożliwia ruch równoległy do upraw, przy czym rząd lub rzędy upraw znajdują się między lewymi i prawymi kołami ciągnika. Ciągniki te są przystosowane do przenoszenia lub napędzania narzędzi mocowanych z przodu ciągnika, między jego osiami, z tyłu lub na skrzyni. Wysokość prześwitu ciągnika w pozycji roboczej mierzona prostopadle do rzędów upraw przekracza 1 000  mm. Jeżeli iloraz wysokości środka ciężkości ciągnika mierzonej od podłoża, przy zastosowaniu zwykle montowanych opon, przez średni rozstaw kół wszystkich osi przekracza 0,90, to maksymalna prędkość konstrukcyjna ciągnika nie może przekroczyć 30 km/h.",
    icon: Tractor
  },
  {
    name: "C4.2a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o bardzo dużej szerokości) charakteryzujące się dużymi wymiarami i przeznaczone przede wszystkim do pracy na rozległych obszarach uprawnych.",
    icon: Tractor
  },
  {
    name: "C4.2b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o bardzo dużej szerokości) charakteryzujące się dużymi wymiarami i przeznaczone przede wszystkim do pracy na rozległych obszarach uprawnych.",
    icon: Tractor
  },
  {
    name: "C4.3a",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, (ciągniki o małym prześwicie) z napędem na cztery koła, których wyposażenie wymienne jest przeznaczone do zastosowań rolniczych lub leśnych i które charakteryzują się posiadaniem ramy nośnej, są wyposażone w jeden lub więcej wałów odbioru mocy, o technicznie dopuszczalnej masie nie większej niż 10 ton, przy czym stosunek tej masy do maksymalnej masy własnej w stanie gotowości do jazdy jest mniejszy niż 2,5, a wysokość środka ciężkości mierzona od podłoża przy zastosowaniu zwykle montowanych opon wynosi mniej niż 850 mm.",
    icon: Tractor
  },
  {
    name: "C4.3b",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, (ciągniki o małym prześwicie) z napędem na cztery koła, których wyposażenie wymienne jest przeznaczone do zastosowań rolniczych lub leśnych i które charakteryzują się posiadaniem ramy nośnej, są wyposażone w jeden lub więcej wałów odbioru mocy, o technicznie dopuszczalnej masie nie większej niż 10 ton, przy czym stosunek tej masy do maksymalnej masy własnej w stanie gotowości do jazdy jest mniejszy niż 2,5, a wysokość środka ciężkości mierzona od podłoża przy zastosowaniu zwykle montowanych opon wynosi mniej niż 850 mm.",
    icon: Tractor
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const category_R = [
  {
    name: "R1a",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których suma technicznie dopuszczalnych mas na oś nie przekracza 1 500  kg.",
    icon: Trailer
  },
  {
    name: "R1b",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których suma technicznie dopuszczalnych mas na oś nie przekracza 1 500  kg.",
    icon: Trailer
  },
  {
    name: "R2a",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 1 500  kg, lecz nie przekracza 3 500  kg.",
    icon: Trailer
  },
  {
    name: "R2b",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 1 500  kg, lecz nie przekracza 3 500  kg.",
    icon: Trailer
  },
  {
    name: "R3a",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 3 500  kg, lecz nie przekracza 21 000  kg.",
    icon: Trailer
  },
  {
    name: "R3b",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 3 500  kg, lecz nie przekracza 21 000  kg.",
    icon: Trailer
  },
  {
    name: "R4a",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej mniejszej lub równej 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 21 000  kg.",
    icon: Trailer
  },
  {
    name: "R4b",
    description: "Przyczepy rolnicze o maksymalnej prędkości konstrukcyjnej większej niż 40 km/h, w których suma technicznie dopuszczalnych mas na oś przekracza 21 000  kg.",
    icon: Trailer
  },
] as const satisfies readonly VehicleCategoryDefinition[];

export const vehicleCategoryGroups = [
  {
    name: "M",
    description:
      "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu pasażerów i ich bagażu",
    categories: category_M,
    icon: Car,
  },
  {
    name: "N",
    description:
      "Pojazdy silnikowe zaprojektowane i zbudowane głównie do przewozu towarów.",
    categories: category_N,
    icon: Van,
  },
  {
    name: "O",
    description: "Przyczepy.",
    categories: category_O,
    icon: Trailer,
  },
  {
    name: "L",
    description: "Dwu-, trzy- i czterokołowe pojazdy silnikowe, łącznie z rowerami z napędem, dwu- i trzykołowymi motorowerami, dwu- i trzykołowymi motocyklami, motocyklami z wózkami bocznymi, lekkimi i ciężkimi czterokołowcami drogowymi oraz lekkimi i ciężkimi czterokołowcami.",
    categories: category_L,
    icon: Motorbike,
  },
  {
    name: "T",
    description: "Ciągniki kołowe.",
    categories: category_T,
    icon: Tractor,
  },
  {
    name: "C",
    description: "Ciągniki gąsienicowe napędzane za pomocą gąsienic lub za pomocą kół i gąsienic.",
    categories: category_C,
    icon: Tractor,
  },
  {
    name: "R",
    description: "Przyczepy rolnicze.",
    categories: category_R,
    icon: Trailer,
  },
] as const satisfies readonly VehicleCategoryGroupDefinition[];

export type VehicleCategoryGroup =
  (typeof vehicleCategoryGroups)[number];

export type VehicleCategoryGroupName = VehicleCategoryGroup["name"];

export type VehicleCategoryData =
  VehicleCategoryGroup["categories"][number];

export type VehicleCategory = VehicleCategoryData["name"];

export const vehicleCategories: readonly VehicleCategory[] =
  vehicleCategoryGroups.flatMap((group) =>
    group.categories.map((category) => category.name),
  );





// export const category_M = ["M1", "M2", "M3"] as const;
// export const category_N = ["N1", "N2", "N3"] as const;
// export const category_O = ["O1", "O2", "O3", "O4"] as const;
// export const category_L = [
//   "L1e", "L2e", "L3e", "L4e", "L5e", "L6e", "L7e",
// ] as const;

// //Kategoria T

// export const category_T1 = ["T1a", "T1b"] as const satisfies readonly [string, string];
// export const category_T2 = ["T2a", "T2b"] as const;
// export const category_T3 = ["T3a", "T3b"] as const;
// export const category_T4 = ["T4.1", "T4.2", "T4.3"] as const;
// export const category_T5 = ["T5"] as const;
// export const category_T = [
//   ...category_T1, ...category_T2, ...category_T3, ...category_T4, ...category_T5,
// ] as const;

// //Kategoria C
// export const category_C1 = ["C1a", "C1b"] as const;
// export const category_C2 = ["C2a", "C2b"] as const;
// export const category_C3 = ["C3a", "C3b"] as const;
// export const category_C4 = ["C4.1", "C4.2", "C4.3"] as const;
// export const category_C5 = ["C5"] as const;
// export const category_C = [
//   ...category_C1, ...category_C2, ...category_C3, ...category_C4, ...category_C5,
// ] as const;

// //Kategoria R
// export const category_R1 = ["R1a", "R1b"] as const satisfies readonly [string, string];;
// export const category_R2 = ["R2a", "R2b"] as const;
// export const category_R3 = ["R3a", "R3b"] as const;
// export const category_R4 = ["R4a", "R4b"] as const;
// export const category_R = [
//   ...category_R1, ...category_R2, ...category_R3, ...category_R4
// ] as const;

// //Wszystkie kategorie
// export const vehicleCategories = [
//   ...category_M,
//   ...category_N,
//   ...category_O,
//   ...category_L,
//   ...category_T,
//   ...category_C,
//   ...category_R,
// ] as const;

// export type VehicleCategory = (typeof vehicleCategories)[number];
