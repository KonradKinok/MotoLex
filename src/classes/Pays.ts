export type DocumentType =
  | "rejestracjaPojazdow"
  | "profesjonalnaRejestracjaPojazdow"
  | "wycofanieCzasowe";

export type FeeRate = {
  readonly dateFrom: Date;
  readonly amount: number;
};

export type FeeDocument = {
  readonly type: DocumentType;
  readonly displayName: string;
  readonly values: readonly FeeRate[];
};

export type FeeDocumentWithHistory = FeeDocument & {
  readonly id: string;
};

export type CurrentFeeDocument = Omit<FeeDocumentWithHistory, "values"> & {
  readonly value: FeeRate;
};

export class Pays {
  private readonly documents = {
    dowodRejestracyjny: {
      type: "rejestracjaPojazdow",
      displayName: "dowód rejestracyjny",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 54 }],
    },
    pozwolenieCzasoweRejestracja: {
      type: "rejestracjaPojazdow",
      displayName: "pozwolenie czasowe (art. 74 ust. 2 pkt 1 PoRD)",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 13.5 }],
    },
    pozwolenieCzasowe: {
      type: "rejestracjaPojazdow",
      displayName: "pozwolenie czasowe",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 18.5 }],
    },
    znakLegalizacyjny: {
      type: "rejestracjaPojazdow",
      displayName: "komplet nalepek legalizacyjnych",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 12.5 }],
    },
    trSamochodowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna samochodowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 40 }],
    },
    trMotocyklowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna motocyklowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 40 }],
    },
    trMotorowerowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna motorowerowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 30 }],
    },
    trIndywidualna: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna indywidualna",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 500 }],
    },
    trZabytkowaSamochodowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna zabytkowa samochodowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }],
    },
    trZabytkowaJednorzedowaZmniejszona: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna zabytkowa jednorzędowa zmniejszona",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }],
    },
    trZabytkowaMotocyklowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna zabytkowa motocyklowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }],
    },
    trZabytkowaMotorowerowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna zabytkowa motorowerowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }],
    },
    trtSamochodowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna samochodowa tymczasowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 15 }],
    },
    trtSamochodowaWyscigowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna samochodowa tymczasowa (zawody sportowe)",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }],
    },
    trtMotocyklowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna motocyklowa tymczasowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 12 }],
    },
    trtMotorowerowa: {
      type: "rejestracjaPojazdow",
      displayName: "tablica rejestracyjna motorowerowa tymczasowa",
      values: [{ dateFrom: new Date(2022, 8, 4), amount: 12 }],
    },
    profesjonalnaDecyzja: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "decyzja o profesjonalnej rejestracji pojazdów",
      values: [{ dateFrom: new Date(2019, 6, 11), amount: 100 }],
    },
    profesjonalnyDowodRejestracyjny: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "profesjonalny dowód rejestracyjny",
      values: [{ dateFrom: new Date(2026, 0, 1), amount: 15 }],
    },
    profesjonalnyznakLegalizacyjny: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "znak legalizacyjny",
      values: [{ dateFrom: new Date(2026, 0, 1), amount: 18.5 }],
    },
    ptrSamochodowa: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "tablica rejestracyjna samochodowa profesjonalna",
      values: [{ dateFrom: new Date(2019, 6, 11), amount: 40 }],
    },
    ptrMotocyklowa: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "tablica rejestracyjna motocyklowa profesjonalna",
      values: [{ dateFrom: new Date(2019, 6, 11), amount: 40 }],
    },
    ptrMotorowerowa: {
      type: "profesjonalnaRejestracjaPojazdow",
      displayName: "tablica rejestracyjna motorowerowa profesjonalna",
      values: [{ dateFrom: new Date(2019, 6, 11), amount: 30 }],
    },

  } as const satisfies Record<string, FeeDocument>;

  public getDocument(id: keyof Pays["documents"]): FeeDocument {
    const document = this.documents[id];
    return {
      ...document,
      values: document.values.map((entry) => ({
        ...entry,
        dateFrom: new Date(entry.dateFrom.getTime()),
      })),
    };
  }

  public getDocumentNewest(
    id: keyof Pays["documents"],
    referenceDate: Date = new Date(),
  ): CurrentFeeDocument | undefined {
    return this.getDocumentsByTypeNewest(this.documents[id].type, referenceDate)
      .find((document) => document.id === id);
  }

  public getDocumentsByTypeAllValue(documentType: DocumentType): FeeDocumentWithHistory[] {
    return Object.entries(this.documents)
      .filter(([, document]) => document.type === documentType)
      .map(([id, document]) => ({
        id,
        ...document,
        values: document.values
          .filter((entry) =>
            entry.dateFrom != null &&
            entry.amount != null &&
            Number.isFinite(entry.dateFrom.getTime()) &&
            Number.isFinite(entry.amount) &&
            entry.amount >= 0
          )
          .map((entry) => ({
            ...entry,
            dateFrom: new Date(entry.dateFrom.getTime()),
          })),
      }))
      .filter((document) => document.values.length > 0);
  }

  // Dates use the user's local time zone. Equal dates keep the first rate.
  public getDocumentsByTypeNewest(
    documentType: DocumentType,
    referenceDate: Date = new Date(),
  ): CurrentFeeDocument[] {
    const endOfDay = new Date(referenceDate.getTime());
    endOfDay.setHours(23, 59, 59, 999);

    return this.getDocumentsByTypeAllValue(documentType)
      .flatMap(({ values, ...document }) => {
        const applicable = values.filter(
          (entry) => entry.dateFrom.getTime() <= endOfDay.getTime()
        );

        if (applicable.length === 0) {
          return [];
        }

        const newest = applicable.reduce((latest, entry) =>
          entry.dateFrom.getTime() > latest.dateFrom.getTime() ? entry : latest
        );

        return [{ ...document, value: newest }];
      })
      .sort((a, b) => a.displayName.localeCompare(b.displayName, "pl"));
  }
}
