import { useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import {
  navigationItems,
  type NavigationItem,
} from "../../config/navigationMain";
import styles from "./NavigationTop.module.scss";

type NavigationMenuItemProps = {
  item: NavigationItem;
};

function getNavigationLinkClassName(isActive: boolean) {
  return [styles.navigationLink, isActive && styles.navigationLinkActive]
    .filter(Boolean)
    .join(" ");
}

export function NavigationMenuItem({
  item,
}: NavigationMenuItemProps) {
  const hasChildren = Boolean(item.children?.length);
  const [isOpen, setIsOpen] = useState(false);
  const submenuId = useId();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const ItemIcon = item.icon;

  return (
    <li
      className={styles.navigationItem}
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={(event) => {
        if (hasChildren && !event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(true);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          event.stopPropagation();
          linkRef.current?.focus();
          setIsOpen(false);
        }
      }}
    >
      <NavLink
        ref={linkRef}
        to={item.to}
        aria-expanded={hasChildren ? isOpen : undefined}
        aria-controls={hasChildren ? submenuId : undefined}
        onClick={() => setIsOpen(false)}
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
          <ChevronDown
            className={styles.submenuIcon}
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </NavLink>

      {hasChildren && (
        <ul
          id={submenuId}
          hidden={!isOpen}
          className={styles.submenu}
          aria-label={`Podmenu: ${item.label}`}
        >
          {isOpen && item.children?.map((child) => (
            <NavigationMenuItem key={child.to} item={child} />
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
