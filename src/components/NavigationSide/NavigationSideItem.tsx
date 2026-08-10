import { NavLink } from "react-router";

import type { NavigationItem } from "../../config/navigationMain";
import styles from "./NavigationSideItem.module.scss";

type NavigationSideItemProps = {
  item: NavigationItem;
  closeMobileMenu: () => void;
  level?: number;
};

function getNavigationLinkClassName(isActive: boolean) {
  return [styles.sidebarLink, isActive && styles.sidebarLinkActive]
    .filter(Boolean)
    .join(" ");
}

export function NavigationSideItem({
  item,
  closeMobileMenu,
  level = 0,
}: NavigationSideItemProps) {
  const ItemIcon = item.icon;
  const hasChildren = Boolean(item.children?.length);
  return (
    <li className={styles.navigationItem}>
      <NavLink
        to={item.to}
        end
        onClick={closeMobileMenu}
        title={`${item.label}`}
        className={({ isActive }) => getNavigationLinkClassName(isActive)}
      >
        <ItemIcon
          className={styles.navigationIcon}
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className={styles.sidebarText}>{item.label}</span>
      </NavLink>
      {hasChildren && (
        <ul className={styles.submenu} aria-label={`Podmenu: ${item.label}`}>
          {item.children?.map((child) => (
            <NavigationSideItem
              key={child.to}
              item={child}
              level={level + 1}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
