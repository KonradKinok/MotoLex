export class Pays {
  private readonly _type = {
    rejestracjaPojazdow: { name: "rejestracjaPojazdow", displayName: "rejestracja pojazdów" },
    profesjonalnaRejestracjaPojazdow: { name: "profesjonalnaRejestracjaPojazdow", displayName: "profesjonalna rejestracja pojazdów" },
    wycofanieCzasowe: { name: "wycofanieCzasowe", displayName: "wycofanie czasowe" }
  };
  private readonly _kindDocument = {
    dowodRejestracyjny: { name: "dowodRejestracyjny", displayName: "dowód rejestracyjny" },
    pozwolenieCzasoweRejestracja: { name: "pozwolenieCzasoweRejestracja", displayName: "pozwolenie czasowe" },
    pozwolenieCzasowe: { name: "pozwolenieCzasowe", displayName: "pozwolenie czasowe" },
    wycofanieCzasowe: { name: "wycofanieCzasowe", displayName: "wycofanie czasowe" }
  };

  //Dowód rejestracyjny
  private _dowodRejestracyjny = { type: this._type.rejestracjaPojazdow, kindDocument: this._kindDocument.dowodRejestracyjny, value: 54 };
  get dowodRejestracyjny() {
    return this._dowodRejestracyjny;
  };

  //Pozwolenie czasowe rejestracja
  private _pozwolenieCzasoweRejestracja = { type: this._type.rejestracjaPojazdow, kindDocument: this._kindDocument.pozwolenieCzasoweRejestracja, value: 13.5 };
  get pozwolenieCzasoweRejestracja() {
    return this._pozwolenieCzasoweRejestracja;
  }

  //Pozwolenie czasowe
  private _pozwolenieCzasowe = { type: this._type.rejestracjaPojazdow, kindDocument: this._kindDocument.pozwolenieCzasowe, value: 18.5 };
  get pozwolenieCzasowe() {
    return this._pozwolenieCzasowe;
  }

}
