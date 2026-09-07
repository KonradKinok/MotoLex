import { Suspense } from "react";
import { Loader } from "../../../components/Loader/Loader";
import { NavLink, Outlet } from "react-router";
import { ROUTES } from "../../../config/routes";
import styles from "./VehicleCategoriesPage.module.scss";

const categories = [
  { label: "M1", to: ROUTES.vehicleCategoryM1 },
  { label: "M2", to: ROUTES.vehicleCategoryM2 },
  { label: "M3", to: ROUTES.vehicleCategoryM3 },
];

function VehicleCategoriesPage() {
  return (
    <section className={styles.page}>
      <h1>Kategorie pojazdów</h1>
      <nav aria-label="Kategorie pojazdów">
        <ul className={styles.navigation}>
          {categories.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end className={styles.link}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
}

export default VehicleCategoriesPage;
