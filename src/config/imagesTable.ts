//Home page images
import VehicleOwnersImg from "../assets/images/home/VehicleOwnersVertical.jpg";
import EmployeesImg from "../assets/images/home/EmployeesVertical.jpg";
import CalculatorImg from "../assets/images/home/CalculatorVertical.jpg";
//VehicleOwners page images
import SprawdzDokumentyVertical from "../assets/images/vehicleOwnersPage/SprawdzDokumentyVertical.webp";
//Employees page images
import HomologacjaVertical from "../assets/images/employeeZonePage/HomologacjaVertical.webp";
//Homologation page images
import KategoriePojazdowVertical from "../assets/images/homologationPage/KategoriePojazdowVertical.jpg";
//Calculators page images
import KalkulatorKary from "../assets/images/calculatorsPage/KalkulatorKaryVertical1086x1448.jpg";
import KalkulatorVin from "../assets/images/calculatorsPage/KalkulatorVinVertical1086x1448.jpg";
import KalkulatorTrwalaUtrata from "../assets/images/calculatorsPage/KalkulatorTrwalaUtrataVertical1086x1448.jpg";
import KalkulatorTerminowAdministracyjnych from "../assets/images/calculatorsPage/KalkulatorTerminówAdministracyjnych.webp";

export const imagesPageCollection = {
  home: {
    vehicleOwners: VehicleOwnersImg,
    employees: EmployeesImg,
    calculator: CalculatorImg
  },
  calculator: {
    penaltiesCalculator: KalkulatorKary,
    vinCalculator: KalkulatorVin,
    permanentLossCalculator: KalkulatorTrwalaUtrata,
    administrativeDeadlinesCalculator: KalkulatorTerminowAdministracyjnych
  },
  vehicleOwners: {
    documents: SprawdzDokumentyVertical
  },
  employees: {
    homologation: HomologacjaVertical
  },
  homologation: {
    vehicleCategories: KategoriePojazdowVertical
  }
};