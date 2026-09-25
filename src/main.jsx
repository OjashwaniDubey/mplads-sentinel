import React from "react";
import { createRoot } from "react-dom/client";
import MPLADSDashboard from "./MPLADSDashboard";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MPLADSDashboard />
  </React.StrictMode>
);
