import { NavLink } from "react-router";
import type { NavigationItem } from "../../../config/navigationMain";
import styles from "./LinkImgPageCustom.module.scss";

type LinkImgPageCustomProps = {
  childPage: NavigationItem | undefined;
  loading?: "eager" | "lazy";
};

export default function LinkImgPageCustom({
  childPage,
  loading = "eager",
}: LinkImgPageCustomProps) {
  if (!childPage) {
    return null;
  }

  return (
    <NavLink to={childPage.to} className={styles.link}>
      <img
        src={childPage.image.src}
        alt={childPage.image.alt}
        width={childPage.image.width}
        height={childPage.image.height}
        loading={loading}
        className={styles.img}
      />
      <div className={styles.overlayContainer}>
        <h2 className={styles.overlayTitle}>{childPage.fullLabel}</h2>
        <p className={styles.overlayText}>{childPage.description}</p>
      </div>
    </NavLink>
  );
}
