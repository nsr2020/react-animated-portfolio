import { createContext, useState, useCallback, useEffect } from "react";
import { dataEnglish } from "../utils/cvinfo";
import dataSpanish from "../utils/cvinfo_spanish";


export const LanguageContext = createContext({
    language: "en",
    data: dataEnglish,
    toggleLanguage: () => null,
  });

  export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(
      () => localStorage.getItem("language") || "en"
    );
    const [languageData, setLanguageData] = useState(
      () => (localStorage.getItem("language") === "es" ? dataSpanish : dataEnglish)
    );
  
    const toggleLanguage = useCallback(() => {
      setLanguage((prevLanguage) => {
        const newLanguage = prevLanguage === "en" ? "es" : "en";
        setLanguageData(newLanguage === "en" ? dataEnglish : dataSpanish);
        return newLanguage;
      });
    }, []);
  
    useEffect(() => {
      localStorage.setItem("language", language);
    }, [language]);
  
    return (
      <LanguageContext.Provider
        value={{
          language,
          data: languageData,
          toggleLanguage,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  };
  