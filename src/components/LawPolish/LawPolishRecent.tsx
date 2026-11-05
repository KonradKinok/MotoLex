import styles from "./LawPolishRecent.module.scss";

export function LawPolishRecent() {
  return (
    <section className={styles.lawPolishRecentContainer}>
      <p className={styles.lawPolishRecentText}>
        Uwaga: Powyższe informacje mają charakter ogólny i nie stanowią porady
        prawnej. W przypadku wątpliwości lub potrzeby uzyskania szczegółowych
        informacji, zaleca się skonsultowanie z odpowiednimi organami lub
        specjalistami w dziedzinie prawa.
      </p>
    </section>
  );
}
