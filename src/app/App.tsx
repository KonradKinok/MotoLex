import { lazy } from "react";
import { Route, Routes } from "react-router";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";
import { ROUTES } from "../config/routes";
//HomePage
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

//CustomerPage
const CustomerZonePage = lazy(
  () => import("../pages/CustomerZonePage/CustomerZonePage"),
);

const DocumentsPage = lazy(
  () => import("../pages/DocumentsPage/DocumentsPage"),
);

//EmployeePage
const EmployeeZonePage = lazy(
  () => import("../pages/EmployeeZonePage/EmployeeZonePage"),
);

const HomologationPage = lazy(
  () => import("../pages/HomologationPage/HomologationPage"),
);

const VehicleCategoriesPage = lazy(
  () =>
    import("../pages/HomologationPage/VehicleCategoriesPage/VehicleCategoriesPage"),
);

const VehicleCategoryM1Page = lazy(
  () =>
    import("../pages/HomologationPage/VehicleCategoriesPage/VehicleCategoryM1Page/VehicleCategoryM1Page"),
);

const VehicleCategoryM2Page = lazy(
  () =>
    import("../pages/HomologationPage/VehicleCategoriesPage/VehicleCategoryM2Page/VehicleCategoryM2Page"),
);

const VehicleCategoryM3Page = lazy(
  () =>
    import("../pages/HomologationPage/VehicleCategoriesPage/VehicleCategoryM3Page/VehicleCategoryM3Page"),
);

//CalculatorPage
const CalculatorPage = lazy(
  () => import("../pages/CalculatorPage/CalculatorPage"),
);
const PenaltiesCalculatorPage = lazy(
  () => import("../pages/PenaltiesCalculatorPage/PenaltiesCalculatorPage"),
);
const VinCalculatorPage = lazy(
  () => import("../pages/VinCalculatorPage/VinCalculatorPage"),
);
const PermanentLossCalculatorPage = lazy(
  () =>
    import("../pages/PermanentLossCalculatorPage/PermanentLossCalculatorPage"),
);

//OtherPages
const PenaltiesPage = lazy(
  () => import("../pages/PenaltiesPage/PenaltiesPage"),
);
const LegalRegulationsPage = lazy(
  () => import("../pages/LegalRegulationsPage/LegalRegulationsPage"),
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.vehicleOwners}>
          <Route index element={<CustomerZonePage />} />
          <Route path="dokumenty" element={<DocumentsPage />} />
        </Route>
        <Route path={ROUTES.employees}>
          <Route index element={<EmployeeZonePage />} />
          <Route path="homologacja">
            <Route index element={<HomologationPage />} />
            <Route
              path="kategorie-pojazdow"
              element={<VehicleCategoriesPage />}
            >
              <Route index element={<p>Wybierz kategorię pojazdu.</p>} />
              <Route path="m1" element={<VehicleCategoryM1Page />} />
              <Route path="m2" element={<VehicleCategoryM2Page />} />
              <Route path="m3" element={<VehicleCategoryM3Page />} />
            </Route>
          </Route>
        </Route>
        <Route path={ROUTES.calculator}>
          <Route index element={<CalculatorPage />} />
          <Route path="kary" element={<PenaltiesCalculatorPage />} />
          <Route path="vin" element={<VinCalculatorPage />} />
          <Route
            path="trwala-utrata"
            element={<PermanentLossCalculatorPage />}
          />
        </Route>
        <Route path="kary" element={<PenaltiesPage />} />
        <Route path="przepisy-prawne" element={<LegalRegulationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
