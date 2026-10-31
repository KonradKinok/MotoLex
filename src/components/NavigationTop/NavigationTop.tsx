import { useId, useLayoutEffect, useRef, useState } from "react";
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
  const submenuRef = useRef<HTMLUListElement>(null);
  const [submenuSide, setSubmenuSide] = useState<"left" | "right">("right");
  const ItemIcon = item.icon;

  useLayoutEffect(() => {
    if (!isOpen) return;

    function updateSubmenuSide() {
      const submenu = submenuRef.current;
      const parent = submenu?.parentElement;
      if (!submenu || !parent?.parentElement?.hasAttribute("data-submenu")) return;

      const bounds = parent.getBoundingClientRect();
      const rightSpace = document.documentElement.clientWidth - bounds.right - 16;
      const leftSpace = bounds.left - 16;
      setSubmenuSide(
        rightSpace >= submenu.offsetWidth || rightSpace >= leftSpace ? "right" : "left",
      );
    }

    updateSubmenuSide();
    window.addEventListener("resize", updateSubmenuSide);
    return () => window.removeEventListener("resize", updateSubmenuSide);
  }, [isOpen]);

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
          ref={submenuRef}
          data-submenu
          data-side={submenuSide}
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
