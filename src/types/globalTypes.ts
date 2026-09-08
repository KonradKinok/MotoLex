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

//PermanentLossCalculatorPage
export type PermanentLossFormData = {
  selectedDate: Date | null;
  O: number;
  W: number;
  S: number;
  M: number;
};

// <pre>Wynik: { JSON.stringify(przyklad1a, null, 2) } </pre>

//  <article className={styles.formPermamentLossCalculatorContainer}>
//       <form className={styles.form} onSubmit={handleSubmit} noValidate>
//         <FieldsetCustom legend="Wybierz rok złożenia wniosku o wyrejestrowanie pojazdu z powodu trwałej utraty:">
//           <Select<ComboBoxOption<number>, false>
//             aria-label="Rok złożenia wniosku o wyrejestrowanie pojazdu z powodu trwałej utraty"
//             options={comboBoxOptionsYear}
//             value={
//               comboBoxOptionsYear.find(
//                 (option) => option.value === totalLoss.year,
//               ) ?? null
//             }
//             styles={comboBoxStylesYear}
//             formatOptionLabel={formatComboBoxOption}
//             getOptionValue={(option) => String(option.value)}
//             placeholder="Wybierz rok …"
//             noOptionsMessage={() => "Brak pasujących opcji"}
//             onChange={(option) =>
//               handleChange({ name: "year", value: option?.value ?? null })
//             }
//           />
//         </FieldsetCustom>
//         <FieldsetCustom legend="Masa własna pojazdu w kg:">
//           <div className={styles.container}>
//             <SingleInput
//               name="VehicleWeight"
//               label="Wprowadź masę własną pojazdu w kg ..."
//               value={totalLoss.VehicleWeight}
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               required
//               error={weightError}
//               onChange={(event) =>
//                 handleChange({
//                   name: "VehicleWeight",
//                   value: event.target.value,
//                 })
//               }
//               onBlur={() => {
//                 if (totalLoss.VehicleWeight === "" && !weightError) {
//                   setWeightError("Podaj masę pojazdu.");
//                 }
//               }}
//               onClear={() => handleChange({ name: "VehicleWeight", value: "" })}
//             />
//           </div>
//         </FieldsetCustom>
//         <FieldsetCustom legend="Rodzaj pojazdu:">
//           <Select<ComboBoxOption<TotalLossW>, false>
//             aria-label="Współczynnik W"
//             options={comboBoxOptionsW}
//             value={
//               comboBoxOptionsW.find((option) => option.value === totalLoss.W) ??
//               null
//             }
//             styles={comboBoxStylesW}
//             formatOptionLabel={formatComboBoxOption}
//             getOptionValue={(option) => String(option.value)}
//             placeholder="Wybierz rodzaj pojazdu ..."
//             noOptionsMessage={() => "Brak pasujących opcji"}
//             onChange={(option) =>
//               handleChange({ name: "W", value: option?.value ?? null })
//             }
//           />
//         </FieldsetCustom>
//         <FieldsetCustom legend="Wzór:">
//           <p>O = W x R + (2 x S x masa pojazdu / 1000) + 0,5 x M</p>
//           <p>
//             O = {totalLoss.W ?? "W"} x {totalLoss.R ?? "R"} + (2 ×{" "}
//             {totalLoss.S ?? "S"} x {totalLoss.VehicleWeight || "masa pojazdu"} /
//             1000) + 0,5 × {totalLoss.M ?? "M"}
//           </p>
//           {result !== null && (
//             <p role="status">
//               Wynik:{" "}
//               {result.toLocaleString("pl-PL", {
//                 style: "currency",
//                 currency: "PLN",
//               })}
//             </p>
//           )}
//         </FieldsetCustom>
//         {formError && (
//           <p role="alert" style={{ color: "var(--color-error)" }}>
//             {formError}
//           </p>
//         )}
//         <div className={`${styles.fieldsetRadio} ${styles.containerButton}`}>
//           <button type="submit">Pokaż</button>
//         </div>
//       </form>
//     </article>