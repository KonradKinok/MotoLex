import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";
import { upScreen } from "../../globalFunctions/globalFunctions";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      upScreen("smooth");
    }
  }, [pathname, navigationType]);

  return null;
}
