import { useState } from "react";
import { Link, useLocation } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import { navigationItems } from "../../config/navigationMain";
import { findNavigationItem } from "../../components/globalFunctions/globalFunctions";
import {
  administrativeDateRange,
  type AdministrativeDateRangeType,
} from "../../components/globalFunctions/administrativeDateRangeTable";
import ComponentDateRange from "../../components/ComponentDateRange/ComponentDateRange";
import styles from "./DateRangeCalculatorPage.module.scss";

export default function DateRangeCalculatorPage() {
  const [selectedValueForComboBox, setSelectedValueForComboBox] =
    useState<AdministrativeDateRangeType | null>(
      administrativeDateRange[0] ?? null,
    );

  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const mainPage = findNavigationItem(navigationItems, normalizedPath);

  if (!mainPage) {
    return (
      <div className={styles.dateRangeCalculatorPageContainer}>
        <h1>Nie znaleziono strony</h1>
        <p>Nie znaleziono strony dla podanej ścieżki: {pathname}</p>
        <p>
          <Link to={ROUTES.home}>Wróć na stronę główną</Link>
        </p>
      </div>
    );
  }
  return (
    <>
      <PageMetadata
        title={`${mainPage.fullLabel} | ${APPLICATION_NAME}`}
        description={mainPage.description}
        path={normalizedPath}
      />
      <section className={styles.dateRangeCalculatorPageContainer}>
        <h1>{mainPage.fullLabel}</h1>
        <p>{mainPage.description}</p>
        <ComponentDateRange
          selectedValueForComboBox={selectedValueForComboBox}
          setSelectedValueForComboBox={setSelectedValueForComboBox}
        />
      </section>
    </>
  );
}
