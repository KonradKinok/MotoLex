import { navigationItems } from "../../config/navigationMain";
import type { NavigationItem } from "../../config/navigationMain";
import { logToConsole } from "./console";
// Get the path names from a patch name
export function getPathNames(patchname: string): string[] {
  const pathParts = patchname
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

