import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [ "htmlTag","cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "assets/locales/{{lng}}/translations.json",
    },
    React: { useSuspense: false },
    interpolation: {
      escapeValue: false, 
    },
  });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
