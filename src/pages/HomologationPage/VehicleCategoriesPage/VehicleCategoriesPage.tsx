import { Suspense } from "react";
import { NavLink, useParams } from "react-router";
import { Loader } from "../../../components/Loader/Loader";
import { ROUTES } from "../../../config/routes";
import { legalRegulationsTable } from "../../../LegalRegulations/legalRegulationsTable";
import {
  vehicleCategoryGroups,
  type VehicleCategory,
  type VehicleCategoryGroup,
} from "../../../LegalRegulations/vehicleCategoriesTheory";
import styles from "./VehicleCategoriesPage.module.scss";

function findVehicleCategoryGroup(
  groupFromUrl: string | undefined,
): VehicleCategoryGroup | undefined {
  if (!groupFromUrl) {
    return undefined;
  }

  return vehicleCategoryGroups.find(
    (group) => group.name.toLowerCase() === groupFromUrl.toLowerCase(),
  );
}

function getVehicleCategoryGroupUrl(group: VehicleCategoryGroup) {
  return `${ROUTES.vehicleCategories}/${group.name.toLowerCase()}`;
}

//Strona /dla-pracownikow/homologacja/kategorie-pojazdow
function VehicleCategoriesPage() {
  const { group: groupFromUrl } = useParams<{
    group?: string;
  }>();

  const selectedGroup = findVehicleCategoryGroup(groupFromUrl);
  const groupDoesNotExist =
    groupFromUrl !== undefined && selectedGroup === undefined;

  const activeCategoryNames: readonly VehicleCategory[] = selectedGroup
    ? selectedGroup.categories.map((category) => category.name)
    : [];

  const regulations = (
    selectedGroup
      ? legalRegulationsTable.filter((record) =>
          activeCategoryNames.some((category) =>
            record.categories.includes(category),
          ),
        )
      : groupDoesNotExist
        ? []
        : [...legalRegulationsTable]
  ).sort((a, b) => b.startDate.localeCompare(a.startDate));

  const canShowRegulations = !groupDoesNotExist;

  return (
    <section className={styles.page}>
      <h1>
        {selectedGroup
          ? `Kategoria pojazdów ${selectedGroup.name}`
          : "Wszystkie kategorie pojazdów"}
      </h1>

      <nav aria-label="Grupy kategorii pojazdów">
        <ul className={styles.navigation}>
          <li>
            <NavLink to={ROUTES.vehicleCategories} end className={styles.link}>
              Wszystkie
            </NavLink>
          </li>

          {vehicleCategoryGroups.map((group) => (
            <li key={group.name}>
              <NavLink
                to={getVehicleCategoryGroupUrl(group)}
                end
                className={styles.link}
              >
                {group.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {selectedGroup?.description && <p>{selectedGroup.description}</p>}

      {groupDoesNotExist && (
        <p role="alert">Nie istnieje grupa kategorii "{groupFromUrl}".</p>
      )}

      {canShowRegulations && regulations.length === 0 && (
        <p>Obecnie nie ma przepisów do wyświetlenia.</p>
      )}

      {canShowRegulations && regulations.length > 0 && (
        <Suspense fallback={<Loader />}>
          <div className={styles.regulations}>
            {regulations.map((record) => {
              const Content = record.Content;

              return <Content key={record.id} {...record} />;
            })}
          </div>
        </Suspense>
      )}
    </section>
  );
}

export default VehicleCategoriesPage;
