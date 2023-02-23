import { useContext } from "react";
import AuthContext from "v2/auth/context";
import locale from "v2/static/locale.json";
import authStorage from "v2/auth/storage";

const useLocale = () => {
  const { lang, setLang } = useContext(AuthContext);

  const i18n = (key) => {
    try {
      return locale[key][lang];
    } catch (err) {
      return "err";
    }
  };

  const switchLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    authStorage.storeLanguage(newLang);
    setLang(newLang);
  };

  return { i18n, switchLang, lang };
};

export default useLocale;
