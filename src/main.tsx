import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./App";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Service from "./Pages/ServicePage/Service.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Service /> */}
  </StrictMode>
);
