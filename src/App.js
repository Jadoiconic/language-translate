import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const lang = [
  {
    code: "en",
    name: "English",
    countryCode: "bg",
  },
  {
    code: "fr",
    name: "Frencais",
    countryCode: "fr",
  },
];
const App = () => {
  const { t } = useTranslation();

  useEffect(() => {}, []);

  return (
    <>
      <nav className="d-flex py-2 align-items-center shadow justify-content-between px-4" style={{backgroundColor:'teal'}}>
        <div>
          <h1>{t("welcomeToReact")}</h1>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Change language
          </button>
          <ul className="dropdown-menu dropdown-menu">
            <li className="text-center">
              <strong>{t("language")}</strong>
            </li>
            {lang.map(({ name, code, countryCode }) => (
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span className="flag-icon flag-icon-bg mx-2"> </span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className="d-flex align-items-center"
        style={{ minHeight: "80vh",backgroundColor:'#eee' }}
      >
        <article className="p-4">
          <h2 className="fs-1">DevSolutions</h2>
          <p className="fs-3">{t("welcomeNote")}</p>
        </article>
        <div className="p-4">{t("welcomeNote")}</div>
      </div>
      <div className=""></div>
    </>
  );
};

export default App;
