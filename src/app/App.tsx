import { lazy } from "react";
import { Route, Routes } from "react-router";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";
import { ROUTES } from "../config/routes";
//HomePage
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

//VehicleOwnersPage
const VehicleOwnersPage = lazy(
  () => import("../pages/VehicleOwnersPage/VehicleOwnersPage"),
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
const DateRangeCalculatorPage = lazy(
  () => import("../pages/DateRangeCalculatorPage/DateRangeCalculatorPage"),
);

//OtherPages
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const PrivacyPolicyPage = lazy(
  () => import("../pages/PrivacyPolicyPage/PrivacyPolicyPage"),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.vehicleOwners}>
          <Route index element={<VehicleOwnersPage />} />
          <Route path="dokumenty" element={<DocumentsPage />} />
        </Route>
        <Route path={ROUTES.employees}>
          <Route index element={<EmployeeZonePage />} />
          <Route path="homologacja">
            <Route index element={<HomologationPage />} />
            <Route path="kategorie-pojazdow">
              <Route index element={<VehicleCategoriesPage />} />
              <Route path=":group" element={<VehicleCategoriesPage />} />
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
          <Route
            path="terminy-administracyjne"
            element={<DateRangeCalculatorPage />}
          />
        </Route>

        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
