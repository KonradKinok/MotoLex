import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router";
import {
  navigationItems,
  type NavigationItem,
} from "../../config/navigationMain";
import styles from "./NavigationTop.module.scss";

type NavigationMenuItemProps = {
  item: NavigationItem;
  level?: number;
};

function getNavigationLinkClassName(isActive: boolean) {
  return [styles.navigationLink, isActive && styles.navigationLinkActive]
    .filter(Boolean)
    .join(" ");
}

export function NavigationMenuItem({
  item,
  level = 0,
}: NavigationMenuItemProps) {
  const hasChildren = Boolean(item.children?.length);
  const ItemIcon = item.icon;
  const SubmenuIcon = level === 0 ? ChevronDown : ChevronRight;

  return (
    <li className={styles.navigationItem}>
      <NavLink
        to={item.to}
        className={({ isActive }) => getNavigationLinkClassName(isActive)}
      >
        <ItemIcon
          className={styles.navigationIcon}
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span className={styles.navigationLabel}>{item.label}</span>

        {hasChildren && (
          <SubmenuIcon
            className={styles.submenuIcon}
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </NavLink>

      {hasChildren && (
        <ul className={styles.submenu} aria-label={`Podmenu: ${item.label}`}>
          {item.children?.map((child) => (
            <NavigationMenuItem key={child.to} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function NavigationTop() {
  return (
    <nav className={styles.mainNavigation} aria-label="Menu główne">
      <ul className={styles.navigationList}>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.to} item={item} />
        ))}
      </ul>
    </nav>
  );
}
