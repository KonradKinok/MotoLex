import styles from "../../RegulationsStyle.module.scss";

export default function Regulation001Vin() {
  return (
    <article className={styles.article}>
      <header>
        <p className={styles.period}>
          Obowiązuje od <time dateTime="2026-01-01">01.01.2026</time>
        </p>

        <h2>Wymagania dotyczące numeru VIN</h2>
      </header>

      <div className={styles.content}>
        <p>Tutaj umieścisz treść przepisu.</p>
      </div>
    </article>
  );
}
