import { lazy } from "react";
import { Route, Routes } from "react-router";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";

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
        <Route path="dla-wlascicieli">
          <Route index element={<CustomerZonePage />} />
          <Route path="dokumenty" element={<DocumentsPage />} />
        </Route>
        <Route path="dla-pracownikow">
          <Route index element={<EmployeeZonePage />} />
          <Route path="homologacja" element={<HomologationPage />} />
        </Route>
        <Route path="kalkulator">
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
