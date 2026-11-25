export class Pays {
  private readonly _type = {
    rejestracjaPojazdow: { name: "rejestracjaPojazdow", displayName: "rejestracja pojazdów" },
    profesjonalnaRejestracjaPojazdow: { name: "profesjonalnaRejestracjaPojazdow", displayName: "profesjonalna rejestracja pojazdów" },
    wycofanieCzasowe: { name: "wycofanieCzasowe", displayName: "wycofanie czasowe" }
  };
  private readonly _kind = {
    dowodRejestracyjny: { name: "dowodRejestracyjny", displayName: "dowód rejestracyjny" },
    pozwolenieCzasoweRejestracja: { name: "pozwolenieCzasoweRejestracja", displayName: "pozwolenie czasowe (art. 74 ust. 2 pkt 1 PoRD)" },
    pozwolenieCzasowe: { name: "pozwolenieCzasowe", displayName: "pozwolenie czasowe" },
    kompletNalepekLegalizacyjnych: { name: "kompletNalepekLegalizacyjnych", displayName: "komplet nalepek legalizacyjnych" },

    //TR stałe
    trSamochodowa: { name: "tablicaRejestracyjnaSamochodowa", displayName: "tablica rejestracyjna samochodowa" },
    trMotocyklowa: { name: "tablicaRejestracyjnaMotocyklowa", displayName: "tablica rejestracyjna motocyklowa" },
    trMotorowerowa: { name: "tablicaRejestracyjnaMotorowerowa", displayName: "tablica rejestracyjna motorowerowa" },
    trIndywidualna: { name: "tablicaRejestracyjnaIndywidualna", displayName: "tablica rejestracyjna indywidualna" },
    trZabytkowaSamochodowa: { name: "tablicaRejestracyjnaZabytkowaSamochodowa", displayName: "tablica rejestracyjna zabytkowa samochodowa" },
    trZabytkowaJednorzedowaZmniejszona: { name: "tablicaRejestracyjnaZabytkowaJednorzedowaZmniejszona", displayName: "tablica rejestracyjna zabytkowa jednorzędowa zmniejszona" },
    trZabytkowaMotocyklowa: { name: "tablicaRejestracyjnaZabytkowaMotocyklowa", displayName: "tablica rejestracyjna zabytkowa motocyklowa" },
    trZabytkowaMotorowerowa: { name: "tablicaRejestracyjnaZabytkowaMotorowerowa", displayName: "tablica rejestracyjna zabytkowa motorowerowa" },
    //TR tymczasowe
    trtSamochodowa: { name: "tablicaRejestracyjnaSamochodowaTymczasowa", displayName: "tablica rejestracyjna samochodowa tymczasowa" },
    trtSamochodowaWyscigowa: { name: "tablicaRejestracyjnaSamochodowaTymczasowaWyscigowa", displayName: "tablica rejestracyjna samochodowa tymczasowa (zawody sportowe)" },
    trtMotocyklowa: { name: "tablicaRejestracyjnaMotocyklowaTymczasowa", displayName: "tablica rejestracyjna motocyklowa tymczasowa" },
    trtMotorowerowa: { name: "tablicaRejestracyjnaMotorowerowaTymczasowa", displayName: "tablica rejestracyjna motorowerowa tymczasowa" },

    //Profesjonalna rejestracja
    profesjonalnaDecyzja: { name: "profesjonalnaDecyzja", displayName: "decyzja o profesjonalnej rejestracji pojazdów" },
    profesjonalnyDowodRejestracyjny: { name: "profesjonalnyDowodRejestracyjny", displayName: "profesjonalny dowód rejestracyjny" },
    profesjonalnyznakLegalizacyjny: { name: "profesjonalnyZnakLegalizacyjny", displayName: "znak legalizacyjny" },
    //ptr
    ptrSamochodowa: { name: "tablicaRejestracyjnaSamochodowaProfesjonalna", displayName: "tablica rejestracyjna samochodowa profesjonalna" },
    ptrMotocyklowa: { name: "tablicaRejestracyjnaMotocyklowaProfesjonalna", displayName: "tablica rejestracyjna motocyklowa profesjonalna" },
    ptrMotorowerowa: { name: "tablicaRejestracyjnaMotorowerowaProfesjonalna", displayName: "tablica rejestracyjna motorowerowa profesjonalna" },
    wycofanieCzasowe: { name: "wycofanieCzasowe", displayName: "wycofanie czasowe" }
  };

  //Dowód rejestracyjny
  private _dowodRejestracyjny = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.dowodRejestracyjny,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 54 }]
  };
  get dowodRejestracyjny() {
    return this._dowodRejestracyjny;
  };

  //Pozwolenie czasowe rejestracja
  private _pozwolenieCzasoweRejestracja = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.pozwolenieCzasoweRejestracja,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 13.5 }]
  };
  get pozwolenieCzasoweRejestracja() {
    return this._pozwolenieCzasoweRejestracja;
  }

  //Pozwolenie czasowe
  private _pozwolenieCzasowe = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.pozwolenieCzasowe,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 18.5 }]
  };
  get pozwolenieCzasowe() {
    return this._pozwolenieCzasowe;
  }

  //znakLegalizacyjny
  private _znakLegalizacyjny = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.kompletNalepekLegalizacyjnych,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 12.5 }]
  };
  get znakLegalizacyjny() {
    return this._znakLegalizacyjny;
  };

  //TR
  private _trSamochodowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trSamochodowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 40 }]
  };
  get trSamochodowa() {
    return this._trSamochodowa;
  };

  private _trMotocyklowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trMotocyklowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 40 }]
  };
  get trMotocyklowa() {
    return this._trMotocyklowa;
  };

  private _trMotorowerowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trMotorowerowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 30 }]
  };
  get trMotorowerowa() {
    return this._trMotorowerowa;
  };

  private _trIndywidualna = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trIndywidualna,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 500 }]
  };
  get trIndywidualna() {
    return this._trIndywidualna;
  };

  private _trZabytkowaSamochodowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trZabytkowaSamochodowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }]
  };
  get trZabytkowaSamochodowa() {
    return this._trZabytkowaSamochodowa;
  };

  private _trZabytkowaJednorzedowaZmniejszona = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trZabytkowaJednorzedowaZmniejszona,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }]
  };
  get trZabytkowaJednorzedowaZmniejszona() {
    return this._trZabytkowaJednorzedowaZmniejszona;
  };

  private _trZabytkowaMotocyklowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trZabytkowaMotocyklowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }]
  };
  get trZabytkowaMotocyklowa() {
    return this._trZabytkowaMotocyklowa;
  };

  private _trZabytkowaMotorowerowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trZabytkowaMotorowerowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }]
  };
  get trZabytkowaMotorowerowa() {
    return this._trZabytkowaMotorowerowa;
  };

  //TR tymczasowe
  private _trtSamochodowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trtSamochodowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 15 }]
  };
  get trtSamochodowa() {
    return this._trtSamochodowa;
  };

  private _trtSamochodowaWyscigowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trtSamochodowaWyscigowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 50 }]
  };
  get trtSamochodowaWyscigowa() {
    return this._trtSamochodowaWyscigowa;
  };

  private _trtMotocyklowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trtMotocyklowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 12 }]
  };
  get trtMotocyklowa() {
    return this._trtMotocyklowa;
  };

  private _trtMotorowerowa = {
    type: this._type.rejestracjaPojazdow,
    kind: this._kind.trtMotorowerowa,
    value: [{ dateFrom: new Date(2022, 8, 4), amount: 12 }]
  };
  get trtMotorowerowa() {
    return this._trtMotorowerowa;
  };
  //Profesjonalny rejestracja
  private _profesjonalnaDecyzja = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.profesjonalnaDecyzja,
    value: [{ dateFrom: new Date(2019, 6, 11), amount: 100 }]
  };
  get profesjonalnaDecyzja() {
    return this._profesjonalnaDecyzja;
  };

  private _profesjonalnyDowodRejestracyjny = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.profesjonalnyDowodRejestracyjny,
    value: [{ dateFrom: new Date(2026, 0, 1), amount: 15 }]
  };
  get profesjonalnyDowodRejestracyjny() {
    return this._profesjonalnyDowodRejestracyjny;
  };

  private _profesjonalnyznakLegalizacyjny = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.profesjonalnyznakLegalizacyjny,
    value: [{ dateFrom: new Date(2026, 0, 1), amount: 18.5 }]
  };
  get profesjonalnyznakLegalizacyjny() {
    return this._profesjonalnyznakLegalizacyjny;
  };

  //PTR
  private _ptrSamochodowa = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.ptrSamochodowa,
    value: [{ dateFrom: new Date(2019, 6, 11), amount: 40 }]
  };
  get ptrSamochodowa() {
    return this._ptrSamochodowa;
  };

  private _ptrMotocyklowa = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.ptrMotocyklowa,
    value: [{ dateFrom: new Date(2019, 6, 11), amount: 40 }]
  };
  get ptrMotocyklowa() {
    return this._ptrMotocyklowa;
  };

  private _ptrMotorowerowa = {
    type: this._type.profesjonalnaRejestracjaPojazdow,
    kind: this._kind.ptrMotorowerowa,
    value: [{ dateFrom: new Date(2019, 6, 11), amount: 30 }]
  };
  get ptrMotorowerowa() {
    return this._ptrMotorowerowa;
  };

  //Tablica dokumentów
  public readonly documentsTable = [
    this._dowodRejestracyjny,
    this._pozwolenieCzasoweRejestracja,
    this._pozwolenieCzasowe,
    this._znakLegalizacyjny,
    //TR stałe
    this._trSamochodowa,
    this._trMotocyklowa,
    this._trMotorowerowa,
    this._trIndywidualna,
    this._trZabytkowaSamochodowa,
    this._trZabytkowaJednorzedowaZmniejszona,
    this._trZabytkowaMotocyklowa,
    this._trZabytkowaMotorowerowa,
    //TR tymczasowe
    this._trtSamochodowa,
    this._trtSamochodowaWyscigowa,
    this._trtMotocyklowa,
    this._trtMotorowerowa,
    //Profesjonalna rejestracja
    this._profesjonalnyDowodRejestracyjny,
    this._profesjonalnyznakLegalizacyjny,
    this._ptrSamochodowa,
    this._ptrMotocyklowa,
    this._ptrMotorowerowa,
    this._profesjonalnaDecyzja,
  ]



  public getDocumentsByTypeAllValue(documentType: keyof Pays["_type"]) {
    return this.documentsTable
      .filter(
        (document) =>
          document.type.name === this._type[documentType].name
      )
      .map((document) => ({
        ...document,
        value: document.value.filter(
          (entry) =>
            entry.dateFrom != null &&
            entry.amount != null
        ),
      }))
      .filter((document) => document.value.length > 0);
  }

  public getDocumentsByTypeNewest(documentType: keyof Pays["_type"]) {
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    return this.getDocumentsByTypeAllValue(documentType)
      .flatMap((document) => {
        const values = document.value.filter(
          (entry) => entry.dateFrom.getTime() <= today.getTime()
        );

        if (values.length === 0) {
          return [];
        }

        const newest = values.reduce((latest, entry) =>
          entry.dateFrom.getTime() > latest.dateFrom.getTime()
            ? entry
            : latest
        );

        return [{
          ...document,
          value: newest,
        }];
      })
      .sort((a, b) =>
        a.kind.displayName.localeCompare(b.kind.displayName, "pl")
      );
  }
}
