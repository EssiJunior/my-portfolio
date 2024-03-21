import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateEn from "./components/Language/translations/en.json"
import translateFr from "./components/Language/translations/fr.json"


//The translations
const resources = {
    fr:{
        translation:translateFr
      },
    en: {
      translation:translateEn
    }
  }

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false, 
    },
    
  });

export default i18n;