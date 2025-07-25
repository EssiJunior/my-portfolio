// REACT COMPONENTS IMPORTS
import { initReactI18next } from 'react-i18next';

// PLUGIN
import i18n from 'i18next';

// TRANSLATIONS
import translateEn from "@/components/Language/translations/en.json"
import translateFr from "@/components/Language/translations/fr.json"


// Translations
const resources = {
  fr:{
      translation:translateFr
    },
  en: {
    translation:translateEn
  }
}

// Plugin configuration
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