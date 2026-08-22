import { navigationItems } from "../../config/navigationMain";
import type { NavigationItem } from "../../config/navigationMain";
import { logToConsole } from "./console";
// Get the path names from a patch name
export function getPathNames(pathname: string): string[] {
  const pathParts = pathname
    .split("/")
    .filter(Boolean)
    .map((part) => `/${part}`);
  return pathParts;
}

//not used
export function conditionToDisplaySidebar(pathname: string): NavigationItem[] {
  const patchnameTable = getPathNames(pathname);
  const allNavigationItems: NavigationItem[] = [];
  const mainNavigationPages = navigationItems.map((item) => ({
    to: item.to,
    label: item.label,
    icon: item.icon,
  }));
  logToConsole("table", `[globalFunctions.ts] [conditionToDisplaySidebar]-patchnameTable`, patchnameTable);
  if (Array.isArray(patchnameTable) && patchnameTable.length === 0) {

    logToConsole("table", `[globalFunctions.ts] [conditionToDisplaySidebar]`, mainNavigationPages);
    return mainNavigationPages;
  }
  else if (Array.isArray(patchnameTable) && patchnameTable.length > 0) {
    const filteredNavigationItems = navigationItems.find((item) => item.to === pathname)?.children ?? [];
    logToConsole("table", `[globalFunctions.ts] [conditionToDisplaySidebar]`, filteredNavigationItems);

    allNavigationItems.push(...mainNavigationPages);
    allNavigationItems.push(...(filteredNavigationItems || []));

    return allNavigationItems;
  }

  return mainNavigationPages;
}

// Find a navigation item by its path in a nested structure
export function findNavigationItem(
  items: NavigationItem[],
  searchedPath: string,
): NavigationItem | undefined {
  for (const item of items) {
    if (item.to === searchedPath) {
      return item;
    }

    if (item.children) {
      const foundItem = findNavigationItem(item.children, searchedPath);

      if (foundItem) {
        return foundItem;
      }
    }
  }

  return undefined;
}

export function zmianaFormatow(currentDay: Date) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const currentDayString = currentDay.toLocaleDateString(
    "pl-PL",
    dateOptions,
  );
  const notificationOfSaleAmount = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(250);
  const dayOfWeekString = currentDay.toLocaleString("pl-PL", {
    weekday: "short",
  });
  return `${currentDayString}${notificationOfSaleAmount}${dayOfWeekString}`;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(amount);
}

const dateOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export function formatDate(date: Date | null): string {
  return date?.toLocaleDateString("pl-PL", dateOptions) ?? "- - -";
}