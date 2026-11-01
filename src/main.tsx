import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App";
import { AppProvider } from "./context/AppProvider";
import { ThemeProvider } from "./features/theme/ThemeProvider";
import "./styles/global.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Nie znaleziono elementu #root");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
