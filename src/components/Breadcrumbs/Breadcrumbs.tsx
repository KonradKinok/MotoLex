import { Link, useLocation } from "react-router";
import { House, ChevronRight } from "lucide-react";
import {
  findNavigationItem,
  getPathNames,
} from "../globalFunctions/globalFunctions";
import { navigationItems } from "../../config/navigationMain";
import styles from "./Breadcrumbs.module.scss";

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const pathNames = getPathNames(pathname);

  if (!pathNames.length) {
    return null;
  }
  return (
    <nav className={styles.breadcrumbs} aria-label="Ścieżka nawigacyjna">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/" aria-label="Strona główna">
            <House size={20} strokeWidth={2} aria-hidden="true" />
          </Link>
          <ChevronRight
            className={styles.separator}
            size={20}
            strokeWidth={2}
            aria-hidden="true"
          />
        </li>
        {pathNames.map((_, index) => {
          const isLast = index === pathNames.length - 1;
          const to = pathNames.slice(0, index + 1).join("");
          const item = findNavigationItem(navigationItems, to);
          const label = item?.label ?? to;

          return (
            <li className={styles.item} key={to}>
              {isLast ? (
                <span className={styles.current} aria-current="page" title={to}>
                  {label}
                </span>
              ) : (
                <>
                  <Link className={styles.link} to={to} title={to}>
                    {label}
                  </Link>

                  <ChevronRight
                    className={styles.separator}
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
