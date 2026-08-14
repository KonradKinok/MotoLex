import styles from "./Advertisement.module.scss";

export function Advertisement() {
  return (
    <div className={styles.advertisement}>
      <p className={styles.advertisementText}>
        Reklama: Zarejestruj swój pojazd w PojazdLex i skorzystaj z naszych
        usług rejestracyjnych online!
      </p>
      <div className={styles.advertisementPlaceholder}>300 × 250</div>
    </div>
  );
}
