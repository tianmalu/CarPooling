import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resource } from './resource'; 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", 
    resources: resource, 
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
