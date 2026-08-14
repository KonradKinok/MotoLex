import styles from "./Advertisement.module.scss";

export function Advertisement() {
  return (
    <aside className={styles.advertisingColumn} aria-label="Reklamy">
      <section className={styles.advertisement}>
        <p className={styles.advertisementLabel}>Reklama</p>
        <div className={styles.advertisementPlaceholder}>300 × 250</div>
      </section>

      <section className={styles.advertisement}>
        <p className={styles.advertisementLabel}>Reklama</p>
        <div className={styles.advertisementPlaceholder}>
          Reklama responsywna
        </div>
      </section>
    </aside>
  );
}
