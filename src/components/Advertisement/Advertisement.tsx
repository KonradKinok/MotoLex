import { useEffect, useRef } from "react";
import styles from "./Advertisement.module.scss";

declare global {
  interface Window {
    adsbygoogle?: { push: (config: Record<string, never>) => unknown };
  }
}

function AdSenseAd({ slot }: { slot: string }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    try {
      window.adsbygoogle =
        window.adsbygoogle || new Array<Record<string, never>>();
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("Nie udało się uruchomić reklamy AdSense:", error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2184279391948911"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export function Advertisement() {
  return (
    <aside className={styles.advertisingColumn} aria-label="Reklamy">
      <section className={styles.advertisement}>
        <p className={styles.advertisementLabel}>Reklama</p>
        <AdSenseAd slot="6720559195" />
      </section>

      <section className={styles.advertisement}>
        <p className={styles.advertisementLabel}>Reklama</p>
        <AdSenseAd slot="7810279586" />
      </section>
    </aside>
  );
}
