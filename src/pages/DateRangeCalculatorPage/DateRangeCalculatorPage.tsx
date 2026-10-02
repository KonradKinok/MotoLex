import { useState } from "react";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import ComponentDateRange from "../../components/ComponentDateRange/ComponentDateRange";
import {
  administrativeDateRange,
  type AdministrativeDateRangeType,
} from "../../components/globalFunctions/administrativeDateRangeTable";
import styles from "./DateRangeCalculatorPage.module.scss";

function DateRangeCalculatorPage() {
  const [selectedValueForComboBox, setSelectedValueForComboBox] =
    useState<AdministrativeDateRangeType | null>(
      administrativeDateRange[0] ?? null,
    );
  return (
    <>
      <PageMetadata
        title={`Kalkulator terminów administracyjnych | ${APPLICATION_NAME}`}
        description="Oblicz ostatni dzień terminu administracyjnego i dzień po jego upływie. Wybierz rodzaj sprawy oraz datę początkową."
        path={ROUTES.dateRangeCalculator}
      />
      <section className={styles.dateRangeCalculatorPageContainer}>
        <h1 className={styles.headerH1}>
          Kalkulator terminów administracyjnych
        </h1>
        <p className={styles.headerH1}>
          Wybierz rodzaj sprawy i datę początkową. Kalkulator wyznaczy ostatni
          dzień terminu oraz pierwszy dzień po jego upływie.
        </p>

        <ComponentDateRange
          selectedValueForComboBox={selectedValueForComboBox}
          setSelectedValueForComboBox={setSelectedValueForComboBox}
        />
      </section>
    </>
  );
}

export default DateRangeCalculatorPage;
