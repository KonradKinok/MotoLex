import { Suspense } from "react";
import { NavLink, useParams } from "react-router";
import { Loader } from "../../../components/Loader/Loader";
import { ROUTES } from "../../../config/routes";
import { legalRegulationsTable } from "../../../LegalRegulations/legalRegulationsTable";
import {
  vehicleCategoryGroups,
  type VehicleCategoryData,
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

function findVehicleCategory(
  categories: readonly VehicleCategoryData[],
  categoryFromUrl: string | undefined,
): VehicleCategoryData | undefined {
  if (!categoryFromUrl) {
    return undefined;
  }

  return categories.find(
    (category) =>
      category.name.toLowerCase() === categoryFromUrl.toLowerCase(),
  );
}

function getVehicleCategoryGroupUrl(group: VehicleCategoryGroup) {
  return `${ROUTES.vehicleCategories}/${group.name.toLowerCase()}`;
}

function getVehicleCategoryUrl(
  group: VehicleCategoryGroup,
  category: VehicleCategoryData,
) {
  return `${getVehicleCategoryGroupUrl(group)}/${category.name.toLowerCase()}`;
}

function VehicleCategoriesPage() {
  const {
    group: groupFromUrl,
    category: categoryFromUrl,
  } = useParams<{
    group?: string;
    category?: string;
  }>();

  const selectedGroup = findVehicleCategoryGroup(groupFromUrl);
  const selectedGroupCategories: readonly VehicleCategoryData[] =
    selectedGroup?.categories ?? [];
  const selectedCategory = findVehicleCategory(
    selectedGroupCategories,
    categoryFromUrl,
  );

  const groupDoesNotExist =
    groupFromUrl !== undefined && selectedGroup === undefined;
  const categoryDoesNotExist = Boolean(
    categoryFromUrl && selectedGroup && !selectedCategory,
  );

  const activeCategoryNames: readonly VehicleCategory[] = selectedCategory
    ? [selectedCategory.name]
    : selectedGroup && !categoryFromUrl
      ? selectedGroupCategories.map((category) => category.name)
      : [];

  const regulations = activeCategoryNames.length
    ? legalRegulationsTable
        .filter((record) =>
          activeCategoryNames.some((category) =>
            record.categories.includes(category),
          ),
        )
        .sort((a, b) => b.startDate.localeCompare(a.startDate))
    : [];

  const pageDescription =
    selectedCategory?.description || selectedGroup?.description;
  const canShowRegulations = Boolean(
    selectedGroup && (!categoryFromUrl || selectedCategory),
  );

  return (
    <section className={styles.page}>
      <h1>
        {selectedCategory
          ? `Kategoria pojazdu ${selectedCategory.name}`
          : selectedGroup
            ? `Kategoria pojazdów ${selectedGroup.name}`
            : "Kategorie pojazdów"}
      </h1>

      <nav aria-label="Grupy kategorii pojazdów">
        <ul className={styles.navigation}>
          {vehicleCategoryGroups.map((group) => (
            <li key={group.name}>
              <NavLink
                to={getVehicleCategoryGroupUrl(group)}
                className={styles.link}
              >
                {group.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {selectedGroup && (
        <nav aria-label={`Kategorie pojazdów grupy ${selectedGroup.name}`}>
          <ul className={styles.navigation}>
            {selectedGroupCategories.map((category) => (
              <li key={category.name}>
                <NavLink
                  to={getVehicleCategoryUrl(selectedGroup, category)}
                  end
                  className={styles.link}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {pageDescription && <p>{pageDescription}</p>}

      {groupDoesNotExist && (
        <p role="alert">Nie istnieje grupa kategorii „{groupFromUrl}”.</p>
      )}

      {categoryDoesNotExist && (
        <p role="alert">
          Kategoria „{categoryFromUrl}” nie należy do grupy {selectedGroup?.name}.
        </p>
      )}

      {!groupFromUrl && <p>Wybierz grupę kategorii pojazdów.</p>}

      {canShowRegulations && regulations.length === 0 && (
        <p>
          Obecnie nie ma przepisów przypisanych do wybranej kategorii.
        </p>
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
