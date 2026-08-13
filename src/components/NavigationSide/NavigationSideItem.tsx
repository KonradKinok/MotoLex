import { useId, type Dispatch, type SetStateAction } from "react";
import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";
import type { NavigationItem } from "../../config/navigationMain";
import styles from "./NavigationSideItem.module.scss";

type NavigationSideItemProps = {
  item: NavigationItem;
  openItemPath: string | null;
  setOpenItemPath: Dispatch<SetStateAction<string | null>>;
  closeMobileMenu: () => void;
  isSidebarCollapsed: boolean;
};

function getNavigationLinkClassName(isActive: boolean) {
  return [styles.sidebarLink, isActive && styles.sidebarLinkActive]
    .filter(Boolean)
    .join(" ");
}

function getParentPath(path: string): string | null {
  const parentPath = path.split("/").slice(0, -1).join("/");

  return parentPath || null;
}

export function NavigationSideItem({
  item,
  openItemPath,
  setOpenItemPath,
  closeMobileMenu,
  isSidebarCollapsed,
}: NavigationSideItemProps) {
  const submenuId = useId();
  const ItemIcon = item.icon;
  const hasChildren = Boolean(item.children?.length);

  const isSubmenuOpen =
    hasChildren &&
    (openItemPath === item.to ||
      openItemPath?.startsWith(`${item.to}/`) === true);

  function toggleSubmenu() {
    setOpenItemPath((currentPath) => {
      const isCurrentBranchOpen =
        currentPath === item.to ||
        currentPath?.startsWith(`${item.to}/`) === true;

      if (isCurrentBranchOpen) {
        return getParentPath(item.to);
      }

      return item.to;
    });
  }

  function handleLinkClick() {
    closeMobileMenu();

    if (hasChildren) {
      toggleSubmenu();
    }
  }

  const submenuClassName = [
    styles.submenuContainer,
    isSubmenuOpen ? styles.submenuContainerOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={styles.navigationItem}>
      <div className={styles.navigationItemHeader}>
        <NavLink
          to={item.to}
          end={!isSidebarCollapsed}
          onClick={handleLinkClick}
          title={item.label}
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
          <button
            className={styles.submenuToggleButton}
            type="button"
            title={
              isSubmenuOpen
                ? `Zwiń podmenu: ${item.label}`
                : `Rozwiń podmenu: ${item.label}`
            }
            aria-label={
              isSubmenuOpen
                ? `Zwiń podmenu: ${item.label}`
                : `Rozwiń podmenu: ${item.label}`
            }
            aria-expanded={isSubmenuOpen}
            aria-controls={submenuId}
            onClick={toggleSubmenu}
          >
            <ChevronDown
              className={[
                styles.submenuToggleIcon,
                isSubmenuOpen ? styles.submenuToggleIconOpen : "",
              ]
                .filter(Boolean)
                .join(" ")}
              size={18}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div className={submenuClassName} aria-hidden={!isSubmenuOpen}>
          <ul
            id={submenuId}
            className={styles.submenu}
            aria-label={`Podmenu: ${item.label}`}
          >
            {item.children?.map((child) => (
              <NavigationSideItem
                key={child.to}
                item={child}
                openItemPath={openItemPath}
                setOpenItemPath={setOpenItemPath}
                closeMobileMenu={closeMobileMenu}
                isSidebarCollapsed={isSidebarCollapsed}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
