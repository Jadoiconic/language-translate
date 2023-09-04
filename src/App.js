import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const lang = [
  {
  code:'en',
  name:'English',
  countryCode:'bg',
},
  {
  code:'fr',
  name:'Frencais',
  countryCode:'fr',
},
]
const App = () => {
  const { t } = useTranslation();


  useEffect(()=>{
  },[])

  return (
    <>
      <nav className="d-flex py-2 align-items-center shadow justify-content-between px-4">
        <div>
          <h1>{t('welcomeToReact')}</h1>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t('language')}
          </button>
          <ul className="dropdown-menu dropdown-menu">
            { lang.map(({name,code,countryCode})=> 
              <li>
              <button className="dropdown-item" onClick={()=>i18next.changeLanguage(code)}>
                <span className="flag-icon flag-icon-bg mx-2"> </span>
                {name}
              </button>
            </li>
            )
            }
            
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="">
          
          <h2>{t("deleteAccount")}</h2>
        </div>
      </div>
    </>
  );
};

export default App;
