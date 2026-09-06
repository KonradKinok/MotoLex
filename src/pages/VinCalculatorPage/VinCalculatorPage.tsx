import {
  useRef,
  useState,
  type ChangeEvent,
  type ClipboardEvent,
  type KeyboardEvent,
  type SubmitEvent,
} from "react";
import { Vin } from "../../classes/Vin";
import styles from "./VinCalculatorPage.module.scss";
import { SearchCheck, X } from "lucide-react";
import { ButtonUniversal } from "../../components/CustomControls/ButtonUniversal/ButtonUniversal";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { FieldsetCustom } from "../../components/CustomControls/FieldsetCustom/FieldsetCustom";
// WVWZZZ1KZ5P093939
const VIN_LENGTH = 17;

type ValidationResult = {
  type: "success" | "error";
  message: string;
};

function VinCalculatorPage() {
  const [vinCharacters, setVinCharacters] = useState<string[]>(
    Array<string>(VIN_LENGTH).fill(""),
  );
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    const candidate = new Vin(event.target.value);
    const character = candidate.toString();

    setVinCharacters((currentCharacters) => {
      const updatedCharacters = [...currentCharacters];
      updatedCharacters[index] = character;
      return updatedCharacters;
    });
    setValidationResult(null);

    if (character && index < VIN_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (event.key === "Backspace" && !vinCharacters[index] && index > 0) {
      event.preventDefault();

      setVinCharacters((currentCharacters) => {
        const updatedCharacters = [...currentCharacters];
        updatedCharacters[index - 1] = "";
        return updatedCharacters;
      });
      setValidationResult(null);
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < VIN_LENGTH - 1) {
      event.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(
    event: ClipboardEvent<HTMLInputElement>,
    startIndex: number,
  ) {
    event.preventDefault();

    const pastedCharacters = new Vin(event.clipboardData.getData("text"))
      .toString()
      .split("")
      .slice(0, VIN_LENGTH - startIndex);

    if (!pastedCharacters.length) {
      return;
    }

    setVinCharacters((currentCharacters) => {
      const updatedCharacters = [...currentCharacters];

      pastedCharacters.forEach((character, offset) => {
        updatedCharacters[startIndex + offset] = character;
      });

      return updatedCharacters;
    });
    setValidationResult(null);

    const nextInputIndex = Math.min(
      startIndex + pastedCharacters.length,
      VIN_LENGTH - 1,
    );
    inputRefs.current[nextInputIndex]?.focus();
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const vin = new Vin(vinCharacters.join(""));

    if (!vin.hasValidLength()) {
      setValidationResult({
        type: "error",
        message: "Numer VIN musi zawierać dokładnie 17 znaków.",
      });
      const firstEmptyInputIndex = vinCharacters.findIndex(
        (character) => !character,
      );
      inputRefs.current[firstEmptyInputIndex]?.focus();
      return;
    }

    if (!vin.hasValidCharacters()) {
      setValidationResult({
        type: "error",
        message: "Numer VIN zawiera niedozwolone znaki.",
      });
      return;
    }

    if (!vin.hasValidVis()) {
      setValidationResult({
        type: "error",
        message:
          "Nieprawidłowa sekcja VIS. Cztery ostatnie znaki numeru VIN muszą być cyframi.",
      });
      return;
    }

    if (!vin.hasValidCheckDigit()) {
      setValidationResult({
        type: "error",
        message: `Numer VIN: ${vin.toString()} ma nieprawidłową cyfrę kontrolną. Oczekiwana cyfra kontrolna to ${vin.calculateCheckDigit()}.`,
      });
      return;
    }

    setValidationResult({
      type: "success",
      message: `Numer VIN ${vin.toString()} jest prawidłowy.`,
    });
  }

  function handleClearData() {
    setVinCharacters(Array<string>(VIN_LENGTH).fill(""));
    setValidationResult(null);
    inputRefs.current[0]?.focus();
  }

  return (
    <>
      <PageMetadata
        title={`Kalkulator VIN | ${APPLICATION_NAME}`}
        description="Sprawdź poprawność numeru VIN dla nowych pojazdów rejestrowanych od 07 lipca 2026 roku i upewnij się, że jest prawidłowy."
        path={ROUTES.vinCalculator}
      />
      <article className={styles.page}>
        <h1>Kalkulator VIN</h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <FieldsetCustom
            legend="Sprawdź VIN dla nowych pojazdów rejestrowanych
              od 07.07.2026 roku"
          >
            <p id="vin-help">
              Numer VIN składa się z 17 znaków i nie zawiera liter I, O ani Q.
            </p>
            <div
              className={styles.inputs}
              role="group"
              aria-label="Numer VIN"
              aria-describedby="vin-help"
            >
              {vinCharacters.map((character, index) => (
                <div className={styles.characterField} key={index}>
                  <input
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    className={styles.input}
                    name={`vin-character-${index + 1}`}
                    value={character}
                    maxLength={1}
                    aria-label={`Znak VIN ${index + 1} z ${VIN_LENGTH}`}
                    aria-invalid={validationResult?.type === "error"}
                    autoComplete="off"
                    spellCheck={false}
                    onChange={(event) => handleChange(event, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onPaste={(event) => handlePaste(event, index)}
                    onFocus={(event) => event.currentTarget.select()}
                  />

                  <span className={styles.characterNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.buttonsContainer}>
              <ButtonUniversal type="submit" icon={<SearchCheck />}>
                Sprawdź VIN
              </ButtonUniversal>
              <ButtonUniversal
                type="button"
                icon={<X />}
                variant="danger"
                onClick={handleClearData}
              >
                Usuń znaki
              </ButtonUniversal>
            </div>
            {validationResult && (
              <p
                className={`${styles.result} ${styles[validationResult.type]}`}
                role={validationResult.type === "error" ? "alert" : "status"}
              >
                {validationResult.message}
              </p>
            )}
          </FieldsetCustom>
        </form>
      </article>
    </>
  );
}

export default VinCalculatorPage;
