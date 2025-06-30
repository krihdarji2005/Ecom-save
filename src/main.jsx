import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextApi from "./context/ContextApi.jsx";
import { FunctionalitiesProvider } from "./context/FunctionalitiesContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FunctionalitiesProvider>
      <ContextApi>
        <App />
      </ContextApi>
    </FunctionalitiesProvider>
  </StrictMode>
);
