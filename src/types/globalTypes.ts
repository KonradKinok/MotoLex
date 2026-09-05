//calculator.ts
export type DayKind =
  | "start"
  | "regularDay"
  | "nonWorkingDay"
  | "lastDay"
  | "penalty";


export interface DayEntry {
  kind: DayKind;
  nextDayNumber: number;
  nextDayDate: Date;
  nextDayOfTheDeadlineNumber: number | null;
  punishmentNextDate: Date | null;
  description: string;
  iconName: "Calendar" | "Banknote";
}

export type PunishmentRuleSet = readonly [
  first: {
    readonly stage: "first";
    readonly deadline: number;
    readonly amount: number;
  },
  second?: {
    readonly stage: "second";
    readonly deadline: number;
    readonly amount: number;
  },
];

export type EventType =
  | "bought"
  | "inheritance"
  | "sold";

export type OwnerType =
  | "vehicleTrader"
  | "otherOwner";

type RuleVersion = {
  readonly effectiveFrom: Date;
  readonly rules: Record<
    OwnerType,
    PunishmentRuleSet
  >;
};

export type PunishmentRules = Record<
  EventType,
  readonly [
    RuleVersion,
    ...RuleVersion[],
  ]
>;

export type InputData = {
  selectedDate: Date;
  typeOfEvent: EventType;
  typeOfPerson: OwnerType;
};

export type CalculationResult = {
  listOfDays: DayEntry[];
};

//PenaltiesCalculatorPage
export type PenaltiesFormData = Omit<InputData, "selectedDate"> & {
  selectedDate: Date | null;
  detailedData: boolean;
};