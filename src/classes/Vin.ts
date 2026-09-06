// Preambuła(10) art. 1 pkt 1 art.12 pkt 2 załącznik II część 2 pkt 2.4

export class Vin {
  private static readonly REQUIRED_LENGTH = 17;
  private static readonly CHECK_DIGIT_INDEX = 8;

  private static readonly CHARACTER_VALUES: Readonly<Record<string, number>> = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,

    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,

    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    P: 7,
    R: 9,

    S: 2,
    T: 3,
    U: 4,
    V: 5,
    W: 6,
    X: 7,
    Y: 8,
    Z: 9,
  };

  private static readonly POSITION_WEIGHTS: readonly number[] = [
    8, 7, 6, 5, 4, 3, 2, 10,
    0, // pozycja 9 — cyfra kontrolna
    9, 8, 7, 6, 5, 4, 3, 2,
  ];

  private readonly value: string;

  constructor(value: string) {
    this.value = value.trim().toUpperCase();
  }

  public toString(): string {
    return this.value;
  }

  public vinSections(): {
    wmi: string;
    vds: string;
    checkDigit: string;
    vis: string;
  } {
    return {
      wmi: this.value.slice(0, 3),
      vds: this.value.slice(3, 8),
      checkDigit: this.value.charAt(Vin.CHECK_DIGIT_INDEX),
      vis: this.value.slice(9, 17),
    };
  }

  public hasValidLength(): boolean {
    return this.value.length === Vin.REQUIRED_LENGTH;
  }

  public hasValidCharacters(): boolean {
    return [...this.value].every(
      (character) => Vin.CHARACTER_VALUES[character] !== undefined,
    );
  }

  public hasValidVis(): boolean {
    const vis = this.value.slice(-8);

    return /^[A-Z0-9]{4}\d{4}$/.test(vis);
  }

  public calculateCheckDigit(): string | null {
    if (!this.hasValidLength() || !this.hasValidCharacters()) {
      return null;
    }

    const sum = [...this.value].reduce((total, character, index) => {
      return (
        total +
        Vin.CHARACTER_VALUES[character] * Vin.POSITION_WEIGHTS[index]
      );
    }, 0);

    const remainder = sum % 11;

    return remainder === 10 ? "X" : String(remainder);
  }

  public hasValidCheckDigit(): boolean {
    const calculatedCheckDigit = this.calculateCheckDigit();

    return (
      calculatedCheckDigit !== null &&
      this.value[Vin.CHECK_DIGIT_INDEX] === calculatedCheckDigit
    );
  }

  public isValid(): boolean {
    return this.hasValidCheckDigit() && this.hasValidVis();
  }
}
