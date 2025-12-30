import { createContext, useContext, useEffect, useState } from "react";
import { en } from "../locales/en";
import { ar } from "../locales/ar";

type Lang = "en" | "ar";
const languages = { en, ar };

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "en";
    setLang(saved);
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
     document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ lang, t: languages[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
