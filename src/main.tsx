import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Не найден элемент #root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
