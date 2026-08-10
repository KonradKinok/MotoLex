import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";
import {
  findNavigationItem,
  getPathNames,
} from "../globalFunctions/globalFunctions";
import { navigationItems } from "../../config/navigationMain";
import styles from "./Breadcrumbs.module.scss";
import { logToConsole } from "../globalFunctions/console";

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const pathNames = getPathNames(pathname);

  if (!pathNames.length) {
    return null;
  }
  return (
    <nav className={styles.breadcrumbs} aria-label="Ścieżka nawigacyjna">
      <ol className={styles.list}>
        {pathNames.map((path, index) => {
          const isLast = index === pathNames.length - 1;
          const to = pathNames.slice(0, index + 1).join("");
          const item = findNavigationItem(navigationItems, to);
          const label = item?.label ?? to;
          logToConsole("table", `[Breadcrumbs.tsx] [Breadcrumbs]-item`, [
            path,
            to,
            label,
          ]);
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
