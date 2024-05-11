import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
