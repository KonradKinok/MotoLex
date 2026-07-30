import { lazy } from "react";
import { Route, Routes } from "react-router";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CustomerZonePage = lazy(
  () => import("../pages/CustomerZonePage/CustomerZonePage"),
);
const EmployeeZonePage = lazy(
  () => import("../pages/EmployeeZonePage/EmployeeZonePage"),
);
const PenaltiesPage = lazy(
  () => import("../pages/PenaltiesPage/PenaltiesPage"),
);
const LegalRegulationsPage = lazy(
  () => import("../pages/LegalRegulationsPage/LegalRegulationsPage"),
);
const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="zalatw-sprawe" element={<CustomerZonePage />} />
        <Route path="dla-pracownikow" element={<EmployeeZonePage />} />
        <Route path="kary" element={<PenaltiesPage />} />
        <Route path="przepisy-prawne" element={<LegalRegulationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
